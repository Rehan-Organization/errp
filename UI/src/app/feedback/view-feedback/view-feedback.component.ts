import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
    selector: 'app-view-feedback',
    templateUrl: './view-feedback.component.html',
    styleUrls: ['./view-feedback.component.scss'],
})
export class ViewFeedbackComponent implements OnInit {
    private updateSubscription?: Subscription;
    constructor(private feedbackService: FeedbackService, private router: Router) {}
    employees: Employee[] = [];
    map = new Map();
    title: string = 'pagination';
    page: number = 1;
    count: number = 0;
    tableSize: number = 5;
    tableSizes: any = [5, 10, 15, 20];
    feedbacks: Feedback[] = [];
    p: any;
    options: string[] = ['My Feedbacks', 'Feedbacks Given By Me'];
    choosenOption: string = 'My Feedbacks';
    flag?: number;
    enteredName: string = '';
    defaultFeedbacks: Feedback[] = [
        {
            feedbackId: 1,
            senderId: 1,
            receiverId: 2,
            employeeName: "pushkar joshi",
            supervisorName: 'Om Jadhao',
            title: 'good performance',
            description:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            created_date: new Date(),
            last_updated_date: new Date(),
        },
        {
            feedbackId: 2,
            senderId: 2,
            receiverId: 3,
            employeeName: "Shankar Waghmode",
            supervisorName: 'Om Jadhao',
            title: 'good performance',
            description:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            created_date: new Date(),
            last_updated_date: new Date(),
        },
        {
            feedbackId: 3,
            senderId: 3,
            receiverId: 4,
            employeeName: "Raj Jadhav",
            supervisorName: 'Om Jadhao',
            title: 'good performance',
            description:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            created_date: new Date(),
            last_updated_date: new Date(),
        },
        {
          feedbackId: 1,
          senderId: 1,
          receiverId: 2,
          employeeName: "pushkar joshi",
          supervisorName: 'Om Jadhao',
          title: 'good performance',
          description:
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          created_date: new Date(),
          last_updated_date: new Date(),
      },
      {
          feedbackId: 2,
          senderId: 2,
          receiverId: 3,
          employeeName: "Shankar Waghmode",
          supervisorName: 'Om Jadhao',
          title: 'good performance',
          description:
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          created_date: new Date(),
          last_updated_date: new Date(),
      },
      {
          feedbackId: 3,
          senderId: 3,
          receiverId: 4,
          employeeName: "Raj Jadhav",
          supervisorName: 'Om Jadhao',
          title: 'good performance',
          description:
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          created_date: new Date(),
          last_updated_date: new Date(),
      },
      {
        feedbackId: 1,
        senderId: 1,
        receiverId: 2,
        employeeName: "pushkar joshi",
        supervisorName: 'Om Jadhao',
        title: 'good performance',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        created_date: new Date(),
        last_updated_date: new Date(),
    },
    {
        feedbackId: 2,
        senderId: 2,
        receiverId: 3,
        employeeName: "Shankar Waghmode",
        supervisorName: 'Om Jadhao',
        title: 'good performance',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        created_date: new Date(),
        last_updated_date: new Date(),
    },
    {
        feedbackId: 3,
        senderId: 3,
        receiverId: 4,
        employeeName: "Raj Jadhav",
        supervisorName: 'Om Jadhao',
        title: 'good performance',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        created_date: new Date(),
        last_updated_date: new Date(),
    },
    {
      feedbackId: 1,
      senderId: 1,
      receiverId: 2,
      employeeName: "pushkar joshi",
      supervisorName: 'Om Jadhao',
      title: 'good performance',
      description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      created_date: new Date(),
      last_updated_date: new Date(),
  },
  {
      feedbackId: 2,
      senderId: 2,
      receiverId: 3,
      employeeName: "Shankar Waghmode",
      supervisorName: 'Om Jadhao',
      title: 'good performance',
      description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      created_date: new Date(),
      last_updated_date: new Date(),
  },
  {
      feedbackId: 3,
      senderId: 3,
      receiverId: 4,
      employeeName: "Raj Jadhav",
      supervisorName: 'Om Jadhao',
      title: 'good performance',
      description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      created_date: new Date(),
      last_updated_date: new Date(),
  }
    ];
    ngOnInit() {
        // this.updateSubscription = interval(3000).subscribe((val) => { this.fetchFeedbacks()});
        this.fetchFeedbacks();
        console.log(this.flag);
        this.feedbackService.getReportees().subscribe((employee) => (this.employees = employee));
        for (let employee of this.employees) {
            this.map.set(employee.employeeId, employee.employeeName);
        }
        this.map.set(1, 'Shankar Waghmode');
        this.map.set(2, 'Pushkar Joshi');
        this.map.set(3, 'Shrikant Hadpad');
        this.map.set(4, 'Avdhut Patil');
        this.map.set(5, 'Pratiksha Gund');
        this.map.set(6, 'Om Jadhao');
    }
    fetchFeedbacks() {
        if (this.choosenOption == 'My Feedbacks') {
            this.flag = 0;
            this.feedbackService
                .fetchAllFeedbacks(1)
                .subscribe((feedback) => (this.feedbacks = feedback));
        } else {
            this.flag = 1;
            this.feedbackService
                .fetchAllFeedbacks(2)
                .subscribe((feedback) => (this.feedbacks = feedback));
        }
    }
    cleanFeedback() {
        for (var i = 0; i < this.feedbacks.length; i++) {
            if (!this.map.has(this.feedbacks[i].senderId)) {
                this.feedbackService
                    .fetchEmployee(this.feedbacks[i].senderId)
                    .subscribe((Employee) =>
                        this.map.set(Employee.employeeId, Employee.employeeName)
                    );
            }
        }
    }
    addFeedback() {
        this.router.navigate(['home/viewFeedback/add']);
    }
    deleteFeedback(feedback: Feedback) {
        if (confirm('Are you sure you want to delete ? ')) {
            // this.feedbacks = this.feedbacks.filter(newFeedback => newFeedback.id != feedback.id);
            this.feedbackService.removeFeedback(feedback.feedbackId).subscribe((feedback) => {
                if (feedback == null) alert('Failed to delete');
                else {
                    alert('Successfully deleted feedback');
                    // this.fetchFeedbacks();
                    this.feedbacks = this.feedbacks.filter(
                        (newFeedback) => newFeedback.feedbackId != feedback.feedbackId
                    );
                }
            });
        }
    }
    updateFeedback(feedback: Feedback) {
        alert(feedback.feedbackId);
        // this.router.navigate["home/updatefeedback"];
    }
}

