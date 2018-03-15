import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { DataService } from '../../shared/services/dataService';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GroupAutoCompleteSelector),
    multi: true
};

@Component({
  selector: 'group-autocomplete-selector',
  templateUrl: './groupAutoCompleteSelector.component.html',
  styleUrls: ['./groupAutoCompleteSelector.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class GroupAutoCompleteSelector implements ControlValueAccessor {

  @Input() groupType;

  @Input() multiple;

  @Input() placeholder;

  //The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  myControl: FormControl = new FormControl();
  filteredGroups: Observable<string[]>;
  groups: any = [];

  ngOnInit() {
    this.groups = (typeof DataService.groupDataSet[this.groupType]) == 'undefined' ? [] : DataService.groupDataSet[this.groupType];
    this.filteredGroups = this.myControl.valueChanges
         .startWith('')
         .map(val => this.filter(val));
  }


  filter(val: string): string[] {
    return this.groups.filter(item =>
      item.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }

  selected(event: any, item) {
    if (event.source.selected) {
      this.innerValue = item.name;
      this.onChangeCallback(this.innerValue);
    }
  }

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
