import { Component, OnInit } from '@angular/core';
import { Speaker, SpeakersService } from 'src/app/shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit {
  speakers: Speaker[] = [];
  selectedSpeaker: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: SpeakersService
  ) { }

  ngOnInit() {
    this.speakers = this.service.getSpeakers();
    this.route.parent.children
      .find(r => r.outlet === 'bio')
      .params
      .subscribe((params: any) => {
        if (params.id) { this.selectedSpeaker = +params.id; }
      });
  }

  showBio(id: number) {
    this.selectedSpeaker = id;
    this.router.navigate(['/speakers', { outlets: { bio: [id] } }]);
  }

}
