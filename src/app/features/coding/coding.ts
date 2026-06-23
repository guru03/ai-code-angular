import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeSnippetDirective } from '../../directive/code-snippet-directive';

@Component({
  selector: 'aic-coding',
  imports: [RouterLink, CodeSnippetDirective],
  templateUrl: './coding.html',
  styleUrl: './coding.scss',
})
export class Coding {
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
