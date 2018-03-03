define([
    'GoToDevSummit/GoToDevSummit'
],
function(GoToDevSummit){

    let classUnderTest = null;
    const fakeView = {
        goTo: options => {

        }
    };
    const palmSpringsY = 33.82;
    const palmSpringsX = -116.54;

    describe('GoToDevSummit', () => {
        beforeEach(() => {
            classUnderTest = new GoToDevSummit({sceneView:fakeView});
        });
    
        it("navigates to dev summit",function(){
            const spy = sinon.spy(classUnderTest.sceneView,"goTo");

            classUnderTest.navigateToDevSummit();

            expect(spy.calledOnce).toBeTruthy("SceneView.goTo was never called!");

            // The first argument of goTo is an x,y target
            const goToTarget = spy.args[0][0];

            expect(goToTarget[0]).toEqual(palmSpringsX,"goTo used the wrong X coordinate!");
            expect(goToTarget[1]).toEqual(palmSpringsY,"goTo used the wrong Y coordinate!");

        });
    });
});