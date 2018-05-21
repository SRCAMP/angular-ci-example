import { Component, ViewChild, ElementRef } from '@angular/core';
import * as HtmlDocx from 'html-docx-js/dist/html-docx';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('pdfContent') pdfContent: ElementRef;

  docContent=`<HTML>
  <HEAD>
  <STYLE>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 0px;
    }
    th {
      background-color: gray;
    }
  </STYLE>
  </HEAD>
  <BODY>
  <p>
  <H1>test header 1</H1>
  </p>
  <table style="width:100%">
  <tr><th>one</th><th>two</th><th>three</th></tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  <tr><td>one</td><td>two</td><th>three</td></tr>
  <tr>
  <td>one2</td>
  <td>
  testing nested table.
  <table style="width:100%">
  <tr><th>one</th><th>two</th></tr>
  <tr><td>one2</td><td>two2</td></tr>
  </table>
  </td>
  <td>one2</td>
  </tr>
  </table>
  </BODY>
  </HTML>
  `;
  testWordFile() {
  //  let converted = HtmlDocx.asBlob('<H1>test header 1</H1>');
  console.log('in testWordFile');
    FileSaver.saveAs( HtmlDocx.asBlob(this.docContent), 'test.docx');
  }
  testPDFFile() {
    console.log('in testPDFFile');
    const doc = new jsPDF();
    const specialElementHandler = {
      '#editor': function(element,rendrer){
        return true;
      }
    }
     doc.fromHTML(this.pdfContent.nativeElement,15,15,{
      //'width': 100,
      'elementHandlers': specialElementHandler
    });
    doc.save('testPDF.pdf');
    }
}

