import { useDragLayer } from 'react-dnd'
import BoxDragPreview from '../BoxDragPreview'
import PicDragPreview from '../PicDragPreview'
// import { BoxDragPreview } from './BoxDragPreview.js'
// import { ItemTypes } from './ItemTypes.js'
// import { snapToGrid } from './snapToGrid.js'
const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}
function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }
  let { x, y } = currentOffset


  // if (isSnapToGrid) {
  //   x -= initialOffset.x
  //   y -= initialOffset.y
  //   ;[x, y] = snapToGrid(x, y)
  //   x += initialOffset.x
  //   y += initialOffset.y
  // }

  const transform = `translate(${x+10}px, ${y}px)`
  return {
    transform,
    // WebkitTransform: transform,
  }
}

const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }))

  if (!isDragging) {
    return null
  }

  function renderItem() {
    
    switch (itemType) {
      case 'leftPicEle':
        return <PicDragPreview img={item.img} />
      default:
        return <BoxDragPreview chartType={item.chartType} />
        // return <PicDragPreview img={item.img} />
        
    }
  }

  return (
    <div style={layerStyles}>
      <div
        style={getItemStyles(initialOffset, currentOffset)}
      >
        {renderItem()}
      </div>
    </div>
  )
}
export default CustomDragLayer
