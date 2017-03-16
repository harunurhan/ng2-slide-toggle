import { Component, Input, ElementRef, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slide-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './slide-toggle.component.html',
  styleUrls: [
    './slide-toggle.component.css'
  ]
})
export class SlideToggleComponent implements OnInit {
  @Input() onText = 'ON';
  @Input() offText = 'OFF';
  @Input() onColor = '#0088cc';
  @Input() offColor = '#aaaaaa';
  @Input() value = false;

  @Output() valueChange = new EventEmitter<boolean>();

  color: string;

  ngOnInit() {
    this.setColor();
  }

  onToggle() {
    this.value = !this.value;
    this.setColor();
    this.valueChange.emit(this.value);
  }

  private setColor() {
    this.color = this.value ? this.onColor : this.offColor;
  }
}
