
// Text
vff.registerControl('js.text', 'lorem ipsum');

// Number
vff.registerControl('js.number', 1);

// Boolean
vff.registerControl('js.boolean', true);

// Dropdown
vff.registerControl('js.dropdown', 'two', {
    ui : {
        type: 'dropdown',
        options : ['one', 'two', 'three']
    }
});

vff.registerControl('js.dropdownObject', 3, {
    ui : {
        type: 'dropdown',
        options :{'one': 1, 'two': 2, 'three': 3}
    }
});

// Radio
vff.registerControl('js.radio', 'two', {
    ui : {
        type: 'radio',
        options : ['one', 'two', 'three']
    }
});
vff.registerControl('js.radioObject', 1, {
    ui : {
        type: 'radio',
        options : {'one': 1, 'two': 2, 'three': 3}
    }
});

vff.registerControl('js.range', 1, {
    ui : {
        type: 'range',
        options: {
            max: 75,
            min: 14
        }
    }
});


// Multiselect
vff.registerControl('js.multiselect', ['one', 'two'], {
    ui : {
        type: 'multiselect',
        options : ['one', 'two', 'three','four', 'five']
    }
});


vff.registerControl('js.multiselectAdvanced', [1,3], {
    ui : {
        type: 'multiselect',
        config: {
            search : true,
            itemsInView : 5
        },
        options : {'one' : 1, 'two' : 2,'three' : 3,'four' : 4,'five' : 5}
    }
});

// Pulse
vff.registerControl('js.pulse', true, {
    ui : {
        type: 'pulse',
        label : 'Push button'
    }});

vff.registerControl('js.vector2', '10;20', {
    ui : {
        type : 'vector2'
    }
});
vff.registerControl('js.vector3', '10;20;30', {
    ui : {
        type : 'vector3'
    }
});

vff.registerControl('js.color', true, {
    ui : {
        type: 'color'
    }});

vff.registerControl('js.file', true, {
    ui : {
        type: 'file'
    }});

vff.on(event => {
    console.log(event.data);
});
