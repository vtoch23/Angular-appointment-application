import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Times } from '../models/times';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  newAppointmentTime: string = "";
  appointments: Appointment[] = [];
  times: string[] = [];


  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments): [];
    this.times = Times;
  }

  addAppointment(){
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
        time: this.newAppointmentTime
      }
      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
      this.newAppointmentTime = "";

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }
  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}


