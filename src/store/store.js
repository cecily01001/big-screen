import { action, makeObservable, observable } from "mobx"

class Store {
    boxes = [];
    common_options = {
        id: '',
        layer_name: '',
        translate_x: 0,
        translate_y: 0,
        width: 0,
        height: 0,
        z_index: 1,
    };
    chart_options = {
        id: '',
        name: '',
        color: '',
        size: '',
        offset: ''
    };

    constructor() {
        makeObservable(this, {
            boxes: observable,
            addBox: action,
            common_options:observable,
            chart_options:observable,
            changeLeft:action,
            changeRight:action,
            changeChart:action,
        })
    }

    addBox(box) {
        this.boxes.push(box)
    }
    changeRight(obj){
        common_options=obj
    }
    changeLeft(obj){
        common_options=obj
    }
    changeChart(obj){
        chart_options=obj
    }
}

export default Store;