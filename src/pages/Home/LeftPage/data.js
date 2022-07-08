import bar from '../../../assets/images/bar.png';
import line from '../../../assets/images/line.png';
import BarConfig from '../../../components/Charts/Bar/BarConfig';
import LineConfig from '../../../components/Charts/Line/LineConfig';
import Line from '../../../components/Charts/Line/index'
import Bar from '../../../components/Charts/Bar/index'

export default
    {
        'bar': {
            type: 'bar',
            img: bar,
            config: BarConfig,
            chart: Bar
        },
        'line': {
            type: 'line',
            img: line,
            config: LineConfig,
            chart: Line
        }
    }

