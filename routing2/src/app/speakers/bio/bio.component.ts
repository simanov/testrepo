import { Component, OnInit } from '@angular/core';
import { Speaker, SpeakersService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  currentSpeaker: Speaker;

  constructor(
    private route: ActivatedRoute,
    private service: SpeakersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      this.currentSpeaker = this.service.getSpeakerByID(params.id);
    });
  }

}
