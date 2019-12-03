import { Component } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

imageFilePath:string;
constructor(private fileChooser: FileChooser, private streamingMedia: StreamingMedia) { }


imageFilePath_change( event : CustomEvent)
{
  console.log(event.target);
  console.log(this.imageFilePath);
   
}
openFile()
{
  this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));
}
  

}
