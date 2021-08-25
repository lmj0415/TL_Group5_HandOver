import React from 'react'

import { useCMSContext } from '../Context/CMSContext'
import { useTableContext } from '../Context/TableContext'
import { useModalContext } from '../Context/ModalContext'

function StoryForm() {

    const {loading} = useCMSContext()
    const {tableMethode} = useTableContext()
    const {modalData, handleChange, submitModalData, error} = useModalContext()

    const modal = tableMethode.modal


    if (loading === true ) {
        return(
            <div className="cmsContent">
                <div className="cmsHead">
                    <h2>Loading... </h2>
                </div>
            </div>
            
        )
    } else {        
        return (
        <div className="cmsContent cmsModal">
            <div className="cmsHead">
                <h2>
                    {modalData._id? "EDIT": "NEW"} {tableMethode.meta.name.toUpperCase()}
                </h2>
                <button className="btn waves-effect waves-light" name= {""} onClick={submitModalData} >Save</button>
            </div>
            <form>
                <input className="ipt" name={modal[0].name} placeholder={modal[0].title} value={modalData[modal[0].name]} onChange={handleChange}></input>
                <input className="ipt" name={modal[1].name}  placeholder={modal[1].title} value={modalData[modal[1].name]} onChange={handleChange}></input>
                <input className="ipt" name={modal[2].name}  placeholder={modal[2].title} value={modalData[modal[2].name]} onChange={handleChange}></input>
                <textarea className="ipt" name={modal[3].name} placeholder={modal[3].title} value={modalData[modal[3].name]} onChange={handleChange}></textarea>
            </form>
            {error !== null?
                <h5> {error}</h5>
                : null}
        </div>
    )
    }
    
}

export default StoryForm