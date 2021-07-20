gdjs.trainingCode = {};
gdjs.trainingCode.GDtankObjects1= [];
gdjs.trainingCode.GDtankObjects2= [];
gdjs.trainingCode.GDbulletObjects1= [];
gdjs.trainingCode.GDbulletObjects2= [];
gdjs.trainingCode.GDNewObjectObjects1= [];
gdjs.trainingCode.GDNewObjectObjects2= [];
gdjs.trainingCode.GDNewObject2Objects1= [];
gdjs.trainingCode.GDNewObject2Objects2= [];
gdjs.trainingCode.GDwoodboxObjects1= [];
gdjs.trainingCode.GDwoodboxObjects2= [];

gdjs.trainingCode.conditionTrue_0 = {val:false};
gdjs.trainingCode.condition0IsTrue_0 = {val:false};
gdjs.trainingCode.condition1IsTrue_0 = {val:false};
gdjs.trainingCode.condition2IsTrue_0 = {val:false};
gdjs.trainingCode.condition3IsTrue_0 = {val:false};
gdjs.trainingCode.condition4IsTrue_0 = {val:false};
gdjs.trainingCode.conditionTrue_1 = {val:false};
gdjs.trainingCode.condition0IsTrue_1 = {val:false};
gdjs.trainingCode.condition1IsTrue_1 = {val:false};
gdjs.trainingCode.condition2IsTrue_1 = {val:false};
gdjs.trainingCode.condition3IsTrue_1 = {val:false};
gdjs.trainingCode.condition4IsTrue_1 = {val:false};


gdjs.trainingCode.eventsList0 = function(runtimeScene) {

};gdjs.trainingCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.trainingCode.condition0IsTrue_0.val = false;
gdjs.trainingCode.condition1IsTrue_0.val = false;
gdjs.trainingCode.condition2IsTrue_0.val = false;
gdjs.trainingCode.condition3IsTrue_0.val = false;
{
gdjs.trainingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.trainingCode.condition0IsTrue_0.val ) {
{
gdjs.trainingCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.trainingCode.condition1IsTrue_0.val ) {
{
gdjs.trainingCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.trainingCode.condition2IsTrue_0.val ) {
{
gdjs.trainingCode.condition3IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}}
}
}
if (gdjs.trainingCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.trainingCode.GDtankObjects1);
{for(var i = 0, len = gdjs.trainingCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.trainingCode.GDtankObjects1[i].rotateTowardAngle(-(90), 270, runtimeScene);
}
}{for(var i = 0, len = gdjs.trainingCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.trainingCode.GDtankObjects1[i].rotateTowardAngle(90, 270, runtimeScene);
}
}{for(var i = 0, len = gdjs.trainingCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.trainingCode.GDtankObjects1[i].rotateTowardAngle(0, 270, runtimeScene);
}
}{for(var i = 0, len = gdjs.trainingCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.trainingCode.GDtankObjects1[i].rotateTowardAngle(180, 270, runtimeScene);
}
}}

}


};gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.trainingCode.GDbulletObjects1});gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.trainingCode.GDbulletObjects1});gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDwoodboxObjects1Objects = Hashtable.newFrom({"woodbox": gdjs.trainingCode.GDwoodboxObjects1});gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.trainingCode.GDtankObjects1});gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDwoodboxObjects1Objects = Hashtable.newFrom({"woodbox": gdjs.trainingCode.GDwoodboxObjects1});gdjs.trainingCode.eventsList2 = function(runtimeScene) {

};gdjs.trainingCode.eventsList3 = function(runtimeScene) {

{


gdjs.trainingCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.trainingCode.GDtankObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.trainingCode.GDtankObjects1.length !== 0 ? gdjs.trainingCode.GDtankObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.trainingCode.eventsList1(runtimeScene);
}


{



}


{


gdjs.trainingCode.condition0IsTrue_0.val = false;
gdjs.trainingCode.condition1IsTrue_0.val = false;
{
gdjs.trainingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if ( gdjs.trainingCode.condition0IsTrue_0.val ) {
{
{gdjs.trainingCode.conditionTrue_1 = gdjs.trainingCode.condition1IsTrue_0;
gdjs.trainingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11355932);
}
}}
if (gdjs.trainingCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.trainingCode.GDtankObjects1);
gdjs.trainingCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDbulletObjects1Objects, (( gdjs.trainingCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.trainingCode.GDtankObjects1[0].getPointX("shootpoint")), (( gdjs.trainingCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.trainingCode.GDtankObjects1[0].getPointY("shootpoint")), "");
}{for(var i = 0, len = gdjs.trainingCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.trainingCode.GDbulletObjects1[i].addPolarForce((( gdjs.trainingCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.trainingCode.GDtankObjects1[0].getAngle()) - 90, 200, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.trainingCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("woodbox"), gdjs.trainingCode.GDwoodboxObjects1);

gdjs.trainingCode.condition0IsTrue_0.val = false;
{
gdjs.trainingCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDbulletObjects1Objects, gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDwoodboxObjects1Objects, false, runtimeScene, false);
}if (gdjs.trainingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.trainingCode.GDwoodboxObjects1 */
{for(var i = 0, len = gdjs.trainingCode.GDwoodboxObjects1.length ;i < len;++i) {
    gdjs.trainingCode.GDwoodboxObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.trainingCode.GDtankObjects1);
gdjs.copyArray(runtimeScene.getObjects("woodbox"), gdjs.trainingCode.GDwoodboxObjects1);

gdjs.trainingCode.condition0IsTrue_0.val = false;
{
gdjs.trainingCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDtankObjects1Objects, gdjs.trainingCode.mapOfGDgdjs_46trainingCode_46GDwoodboxObjects1Objects, false, runtimeScene, false);
}if (gdjs.trainingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.trainingCode.GDwoodboxObjects1 */
{for(var i = 0, len = gdjs.trainingCode.GDwoodboxObjects1.length ;i < len;++i) {
    gdjs.trainingCode.GDwoodboxObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.trainingCode.eventsList2(runtimeScene);
}


{


gdjs.trainingCode.condition0IsTrue_0.val = false;
{
gdjs.trainingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.trainingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.trainingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.trainingCode.GDtankObjects1.length = 0;
gdjs.trainingCode.GDtankObjects2.length = 0;
gdjs.trainingCode.GDbulletObjects1.length = 0;
gdjs.trainingCode.GDbulletObjects2.length = 0;
gdjs.trainingCode.GDNewObjectObjects1.length = 0;
gdjs.trainingCode.GDNewObjectObjects2.length = 0;
gdjs.trainingCode.GDNewObject2Objects1.length = 0;
gdjs.trainingCode.GDNewObject2Objects2.length = 0;
gdjs.trainingCode.GDwoodboxObjects1.length = 0;
gdjs.trainingCode.GDwoodboxObjects2.length = 0;

gdjs.trainingCode.eventsList3(runtimeScene);
return;

}

gdjs['trainingCode'] = gdjs.trainingCode;
