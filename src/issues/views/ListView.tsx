import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import {useState} from 'react'


export const ListView = () => {

  //esto es para selecccionar los labels y que aparezcan como marcados cuando los clickas

  const [selectedLabels, setSelectedLabels] = useState <string[]>([])

  const onLabelChanged = (labelName:string) =>{
    (selectedLabels.includes(labelName))
    ? setSelectedLabels (selectedLabels.filter(label => label !== labelName))
    : setSelectedLabels([...selectedLabels,labelName])
  }

  return (
    <div className="row mt-5">
      
      <div className="col-8">
        <IssueList />
      </div>
      
      <div className="col-4">
        <LabelPicker
          selectedLabels= {selectedLabels}
          onChange= {onLabelChanged}
        />
      </div>
    </div>
  )
}
