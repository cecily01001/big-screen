import Bar from '../components/Charts/Bar'
import chartList from '../pages/Home/LeftPage/data'
export const getChartComp = (type) => {
    return chartList[type].chart
}

export const getChartNameList=()=>{
    return Object.values(chartList).map((ele,index)=>({
        type:ele.type,
        source:ele.img
    }))
}