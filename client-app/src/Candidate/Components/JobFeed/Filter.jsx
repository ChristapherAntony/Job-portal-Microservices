import React from 'react'


function Filter() {
    return (
        <div className="lg:col-span-4 md:col-span-6">
            <div className="shadow  p-6 rounded-md bg-white  sticky top-20">
                <form>
                    <div className="grid grid-cols-1 gap-3">
                        <div>
                            <label htmlFor="searchname" className="font-semibold">
                                Search Company
                            </label>
                            <div className="relative mt-2">
                                <i className="uil uil-search text-lg absolute top-[5px] ltr:left-3 rtl:right-3" />
                                <input
                                    name="search"
                                    id="searchname"
                                    type="text"
                                    className="form-input border border-slate-100  ltr:pl-10 rtl:pr-10"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold">Categories</label>
                            <select className="form-select form-input border border-slate-100  block w-full mt-1">
                                <option value="WD">Web Designer</option>
                                <option value="WD">Web Developer</option>
                                <option value="UI">UI / UX Desinger</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-semibold">Location</label>
                            <select className="form-select form-input border border-slate-100  block w-full mt-1">
                                <option value="NY">New York</option>
                                <option value="MC">North Carolina</option>
                                <option value="SC">South Carolina</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-semibold">Job Types</label>
                            <div className="block mt-2">
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="my-form-checkbox border border-slate-100  text-blue-600 rounded w-4 h-4"
                                            defaultChecked=""
                                        />
                                        <span className="ml-2 text-slate-400">Full Time</span>
                                    </label>
                                    <span className="bg-blue-600/10 text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                                        3
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="my-form-checkbox border border-slate-100  text-blue-600 rounded w-4 h-4"
                                        />
                                        <span className="ml-2 text-slate-400">Part Time</span>
                                    </label>
                                    <span className="bg-blue-600/10 text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                                        7
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="my-form-checkbox border border-slate-100  text-blue-600 rounded w-4 h-4"
                                        />
                                        <span className="ml-2 text-slate-400">Freelancing</span>
                                    </label>
                                    <span className="bg-blue-600/10 text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                                        4
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="my-form-checkbox border border-slate-100  text-blue-600 rounded w-4 h-4"
                                        />
                                        <span className="ml-2 text-slate-400">Fixed Price</span>
                                    </label>
                                    <span className="bg-blue-600/10 text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                                        6
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="my-form-checkbox border border-slate-100  text-blue-600 rounded w-4 h-4"
                                        />
                                        <span className="ml-2 text-slate-400">Remote</span>
                                    </label>
                                    <span className="bg-blue-600/10 text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                                        7
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="my-form-checkbox border border-slate-100  text-blue-600 rounded w-4 h-4"
                                        />
                                        <span className="ml-2 text-slate-400">
                                            Hourly Basis
                                        </span>
                                    </label>
                                    <span className="bg-blue-600/10 text-blue-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                                        44
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold">Salary</label>
                            <div className="block mt-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="my-form-radio text-blue-600 border border-slate-100 "
                                            name="radio-colors"
                                            defaultValue={1}
                                            defaultChecked=""
                                        />
                                        <span className="ml-2 text-slate-400">10k - 15k</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="my-form-radio text-blue-600 border border-slate-100 "
                                            name="radio-colors"
                                            defaultValue={2}
                                        />
                                        <span className="ml-2 text-slate-400">15k - 25k</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="my-form-radio text-blue-600 border border-slate-100 "
                                            name="radio-colors"
                                            defaultValue={3}
                                        />
                                        <span className="ml-2 text-slate-400">
                                            more than 25K
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md w-full"
                                defaultValue="Apply Filter"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filter