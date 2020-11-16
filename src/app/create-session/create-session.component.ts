import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISession} from "../shared/ievent";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output()
  saveNewSessionEvent: EventEmitter<ISession> = new EventEmitter();
  @Output()
  cancelAddSession: EventEmitter<any> = new EventEmitter();

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required]);
    this.presenter = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required]);
    this.level = new FormControl('', [Validators.required]);
    this.abstract = new FormControl('', [Validators.required, this.retrictedWords, Validators.minLength(8)]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(parameters: FormGroup): void {
    console.log("CreateSessionComponent.saveSession()");
    console.log(parameters);

    let newObj: ISession = {
      abstract: parameters.value.abstract,
      duration: parameters.value.duration,
      id: undefined,
      level: parameters.value.level,
      name: parameters.value.name,
      presenter: parameters.value.presenter,
      voters: []
    };
    this.saveNewSessionEvent.emit(newObj);
  }

  retrictedWords(fc: FormControl): { [key: string]: any } | null {
    console.log('CreateSessionComponent.retrictedWords()');
    return fc.value.startsWith('xx') ? {'errorName': 'value of validation'} : null;
  }

  cancelAddSessionChild(): void {
    console.log('CreateSessionComponent.cancelAddSessionChild()');
    this.cancelAddSession.emit(null);
  }
}
