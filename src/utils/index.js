import chartList from '../pages/Home/LeftPage/data'

export const getChartComp = (type) => {
    return chartList[type].chart?chartList[type].chart:null
}

export const getChartNameList=()=>{
    return Object.values(chartList).map((ele,index)=>({
        type:ele.type,
        source:ele.img
    }))
}

export const getConfigComp=(type)=>{
    return chartList[type].config
}