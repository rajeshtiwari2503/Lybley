import React from 'react'

const DashboardHeader = (props) => {
    const { pagetitle,modalbutton } = props
    return (
        <div className="row align-items-center">
            <div className="border-0 mb-4">
                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0">{pagetitle}</h3>
                    {
                            modalbutton ? modalbutton() : null
                        }
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader