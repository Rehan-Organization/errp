package com.abs.errp.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.abs.errp.user.ErrpUser;

@CrossOrigin("*")
@RestController
public class LoginController {

	@Autowired
	AuthenticationManager authManager;
	
	@Autowired
	LoggedInUserContext userContext;
	
	@GetMapping("/test")
	public ResponseEntity<ErrpUser> test() {
		LoggedInUser user = this.userContext.getLoggedInUser();
		
		return new ResponseEntity(HttpStatus.OK);
	}

	@RequestMapping(value = "/authenticate", method = { RequestMethod.POST }, consumes = {
			MediaType.APPLICATION_JSON_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE })
	public UserInfoWrapper authenticate(@RequestBody UserInfoWrapper userInfo, HttpServletRequest request,
			HttpServletResponse response, HttpSession session) {
		session.invalidate();
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				userInfo.getUserName(), userInfo.getPassword());
		UserInfoWrapper wrapper = new UserInfoWrapper();
        return authenticate(userInfo, request, response, wrapper, authenticationToken);

	}
	
	public UserInfoWrapper authenticate(UserInfoWrapper userInfo, HttpServletRequest request, HttpServletResponse response, 
            UserInfoWrapper wrapper, Authentication authenticationToken)
    {
        HttpSession session;
        Authentication sca = null;
        try
        {
            sca = this.authManager.authenticate(authenticationToken);
        }
        catch (AuthenticationException e)
        {
            try
            {
                session = request.getSession(false);
                if (session != null)
                {
                    session.invalidate();
                }
            }
            catch (Exception e1)
            {
                throw e;
            }
            throw e;
        }
        catch (Exception e)
        {
            throw e;
        }

        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(sca);

        session = request.getSession(true);
        wrapper.setSessionId(session.getId());

        session.setAttribute("user", userInfo.getUserName());
        wrapper.setPassword(null);

        session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, sc);

//        response.addHeader("x-auth-token", session.getId());
        
        LoggedInUser user = (LoggedInUser) sc.getAuthentication().getPrincipal();

        wrapper.setUser(user);
        
        return wrapper;
    }
	
	@RequestMapping(value = { "/logout" }, method = { RequestMethod.POST })
	@ResponseBody
	public boolean logout(HttpServletRequest request, HttpSession session) throws Exception {
		session.invalidate();
		return true;
	}
}
