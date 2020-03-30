module.exports = {
    EXPOSE_DELIMITER    : " ",
    NAMESPACE_DELIMITER : ".",
    DEFAULT_GROUP_NAME  : "untitled template",
    TIMECODE           : "__timecode__",
    UI                  : {
        MULTISELECT     : 'multiselect',
        DROPDOWN        : 'dropdown',
        RADIO           : 'radio',
        RANGE           : 'range'
    },
    ATTRIBUTE           : {
        CONTROL         : "vff-control",
        BIND            : "vff-bind",
        OPTIONS         : "vff-options",
        EXPOSE          : "vff-expose",
        CONTROLLER      : "vff-controller",
        DATA            : "vff-data",
        SELECTION       : "vff-select-from"
    },
    MODE                : {
        NORMAL          : "normal",
        PREVIEW         : "controller-preview",
        PROGRAM         : "controller-program"
    }
};