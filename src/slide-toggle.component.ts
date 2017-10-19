import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slide-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './slide-toggle.component.html',
  styleUrls: [
    './slide-toggle.component.css'
  ]
})
export class SlideToggleComponent {

  @Input() value = false;
  @Input() onText = 'ON';
  @Input() offText = 'OFF';
  @Input() onColor = '#0088cc';
  offColor = '#eceeef';

  @Output() valueChange = new EventEmitter<boolean>();

  onToggle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }

  get color(): string {
    return this.value ? this.onColor : this.offColor;
  }
}
