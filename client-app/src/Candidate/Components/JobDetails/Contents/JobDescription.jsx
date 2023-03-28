import React from 'react'

function JobDescription({data}) {
    return (
        <div>
            <h5 className="text-lg font-semibold mt-6">Job Description:</h5>
            <p className="text-slate-400 mt-4">
                {data}
            </p>
            {/* <p className="text-slate-400 mt-4">
                This means that Lorem Ipsum cannot accurately represent, for example,
                German, in which all nouns are capitalized. Thus, Lorem Ipsum has only
                limited suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces.
            </p>
            <p className="text-slate-400 mt-4">
                It sometimes makes sense to select texts containing the various
                letters and symbols specific to the output language.
            </p> */}
        </div>
    )
}

export default JobDescription