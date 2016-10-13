(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'moment'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('moment'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.moment);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    class TinyWrap extends _react.Component {
        constructor(props) {
            super(props);

            this.state = { editorInstance: 'tinymce_editor_' + (0, _moment2.default)().format('X') };
        }

        shouldComponentUpdate() {
            return false;
        }

        componentWillReceiveProps(props) {
            var tinywrap = this;

            if (tinymce.get(this.state.editorInstance) && tinymce.get(this.state.editorInstance).initialized) {
                if (tinymce.get(tinywrap.state.editorInstance).getContent() != props.content) tinymce.get(this.state.editorInstance).setContent(props.content ? props.content : '');
            } else {
                if (this.delayedUpdate) clearInterval(this.delayedUpdate);

                this.delayedUpdate = setInterval(function () {
                    if (tinymce.get(tinywrap.state.editorInstance) && tinymce.get(tinywrap.state.editorInstance).initialized) {
                        if (tinymce.get(tinywrap.state.editorInstance).getContent() != props.content) tinymce.get(tinywrap.state.editorInstance).setContent(props.content ? props.content : '');

                        clearInterval(tinywrap.delayedUpdate);
                    }
                }, 100);
            }
        }

        componentDidMount() {
            var tinywrap = this;

            tinymce.init(_extends({}, this.props.config, {
                selector: '#' + this.state.editorInstance,
                init_instance_callback: function (ed) {
                    ed.setContent(tinywrap.props.content ? tinywrap.props.content : '');

                    ed.on('NodeChange', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });

                    ed.on('change', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });

                    ed.on('keyup', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });

                    ed.on('undo', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });

                    ed.on('redo', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });

                    ed.on('copy', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });

                    ed.on('cut', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });

                    ed.on('paste', function () {
                        if (tinywrap.props.onChange && typeof tinywrap.props.onChange == 'function') tinywrap.props.onChange(tinymce.get(tinywrap.state.editorInstance).getContent());
                    });
                } }));
        }

        componentWillUnmount() {
            if (tinymce.get(this.state.editorInstance)) tinymce.get(this.state.editorInstance).destroy();
        }

        render() {
            return _react2.default.createElement('textearea', { id: this.state.editorInstance });
        }
    }

    exports.default = TinyWrap;
});