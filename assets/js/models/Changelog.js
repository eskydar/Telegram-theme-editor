define([
    'underscore',
    'core/model'
], function(
    _,
    Model
){
    var Changelog = Model.extend({
        initialize: function(){
            this.set('releases', [
                {
                    type: 'hotfix',
                    icon: 'check',
                    heading: 'WHAT A FIX',
                    date: 'Today',
                    description: 'Its amazing this fix'
                },
                {
                    type: 'hotfix',
                    icon: 'check',
                    heading: 'WHAT A FIX',
                    date: 'Today',
                    description: 'Its amazing this fix'
                },
                {
                    type: 'hotfix',
                    icon: 'check',
                    heading: 'WHAT A FIX',
                    date: 'Today',
                    description: 'Its amazing this fix'
                }
            ]);
        }
    });

    return new Changelog();
});

