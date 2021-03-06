import { Component, OnInit } from '@angular/core';
import { Room } from '../room.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AdventureService } from '../adventure.service';

@Component({
  selector: 'app-room-new',
  templateUrl: './room-new.component.html',
  styleUrls: ['./room-new.component.css']
})
export class RoomNewComponent implements OnInit {
  roomForm: FormGroup;

  constructor(private fb: FormBuilder, private adventureService: AdventureService) { }

  ngOnInit() {
    this.roomForm = this.fb.group({
      prompt: '',
      img: '',
      sequence: '',
      goodChoice: '',
      goodResult: '',
      badChoice: '',
      badResult: ''
    })
  }

  addRoom() {
    const formModel = this.roomForm.value;
    var newRoom = new Room(formModel.prompt, formModel.img, formModel.goodChoice, formModel.goodResult, formModel.badChoice, formModel.badResult, formModel.sequence);
    this.adventureService.addRoom(newRoom);
    this.roomForm.reset();
  }

}
