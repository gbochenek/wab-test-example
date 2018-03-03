import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import template from 'dojo/text!./GoToDevSummit.html';

export default declare([_WidgetBase,_TemplatedMixin],{
    templateString: template
});