import { LoadingIcon } from '../../shared/components/LoadingIcon';
import {useLabels} from '../hooks/useLabels'
import {FC} from 'react'



interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker:FC<Props> = ({selectedLabels,onChange}) => {


  // toda la parte de axios y la ReactQuery la hemos metido en este custom hook
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) {
    return (<LoadingIcon/>);
  }

  return (
    <div>
      {
        labelsQuery.data?.map(label =>
        <span 
            key={label.id}
            className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name)?'label-active':''}`}
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
            onClick={() => onChange(label.name)}
        >
            {label.name}
        </span>
          
          )
      }
        
    </div>
  )
}