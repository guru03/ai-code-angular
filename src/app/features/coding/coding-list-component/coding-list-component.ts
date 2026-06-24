import { Component } from '@angular/core';
import { CodeSnippetDirective } from '../../../directive/code-snippet-directive';

@Component({
  selector: 'aic-coding-list-component',
  imports: [CodeSnippetDirective],
  templateUrl: './coding-list-component.html',
  styleUrl: './coding-list-component.scss',
})
export class CodingListComponent {
  codeBlock = `// Syntax:
  var boundFunc = func.bind(thisArg[, arg1[, arg2[, ...]]])


  // Example:
  var employee1 = { firstName: "John", lastName: "Rodson" };
  var employee2 = { firstName: "Jimmy", lastName: "Baily" };

  function invite(greeting1, greeting2) {
    console.log(
      greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
  }

  var inviteEmployee1 = invite.bind(employee1);
  var inviteEmployee2 = invite.bind(employee2);

  inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
  inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?`;
  language = 'typescript';
  items = Array.from({ length: 10 }); // creates an array of 10 empty slots
}
