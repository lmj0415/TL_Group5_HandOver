import React from 'react'

import { useCMSContext } from '../Context/CMSContext'
import { useTableContext } from '../Context/TableContext'
import { useModalContext } from '../Context/ModalContext'

function StoryForm() {

    const {loading, setModal, setPostId} = useCMSContext()
    const {tableMethode} = useTableContext()
    const {modalData, handleChange, submitModalData, error} = useModalContext()

    const modal = tableMethode.modal


    if (loading === true ) {
        return(
            <div className="cmsContent">
                <div className="cmsHead">
                </div>
            </div>
            
        )
    } else {        
        return (
        <div className="cmsContainer cmsModal">
            <div className="cmsHead">
                <button className="clsBtn" onClick={()=> {setModal(false); setPostId(null)}}>❮</button>
                <h2>
                    {modalData._id? "EDIT": "NEW"} {tableMethode.meta.name.toUpperCase()}
                </h2>
                <button className="btn waves-effect waves-light" name= {""} onClick={submitModalData} >Save</button>
            </div>
            <div className="cmsContent">
                <form>
                    <label className="cmsI">{modal[0].title}<input name={modal[0].name} placeholder={modal[0].title} value={modalData[modal[0].name]} onChange={handleChange}></input></label>
                    <label className="cmsI">{modal[1].title}<input name={modal[1].name}  placeholder={modal[1].title} value={modalData[modal[1].name]} onChange={handleChange}></input></label>
                    <label className="cmsI">{modal[2].title}<input name={modal[2].name}  placeholder={modal[2].title} value={modalData[modal[2].name]} onChange={handleChange}></input></label>
                    <label className="cmsI">{modal[3
                    ].title}<textarea className="cmsI" name={modal[3].name} placeholder={modal[3].title} value={modalData[modal[3].name]} onChange={handleChange}></textarea></label>
                </form>
                {error !== null?
                    <h5> {error}</h5>
                    : null}
            </div>
        </div>
    )
    }
    
}

export default StoryForm