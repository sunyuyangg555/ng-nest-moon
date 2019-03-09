import {
  Component, OnInit, Inject
} from '@angular/core';
import { ToastOption, TOASTOPTION } from './toast.type';

@Component({
  selector: 'nm-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(@Inject(TOASTOPTION) public option: ToastOption) { }

  ngOnInit() {
    setTimeout(() => {
      this.option.detach();
    }, this.option.delay ? this.option.delay : 1000);
  }

}
