import { Fragment, useRef, useState } from 'react'
import { uid } from 'uid';
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify';

export default function AddQuestions({ onClose, addQuestion }) {

  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)
  const inputRef = useRef(null)
  const optionARef = useRef(null)
  const optionBRef = useRef(null)
  const optionCRef = useRef(null)
  const optionDRef = useRef(null)
  const correctAnswerRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
    onClose();
  }

  const handleAdd = () => {
    const question = inputRef.current.value;
    const answerA = optionARef.current.value;
    const answerB = optionBRef.current.value;
    const answerC = optionCRef.current.value;
    const answerD = optionDRef.current.value;
    const correctAnswer = correctAnswerRef.current.value;
    if (!question || !answerA || !answerB || !answerC || !answerD || !correctAnswer) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      return;
    }
    const data = {
      id: uid(5),
      question: question,
      optionA: answerA,
      optionB: answerB,
      optionC: answerC,
      optionD: answerD,
      answer: correctAnswer
    };
    addQuestion(data)
    handleClose()

  };




  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className=" relative z-10" initialFocus={cancelButtonRef} onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed  inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div> */}
                    <div className="mt-3 text-center w-full sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Add Question
                      </Dialog.Title>
                      <div className="mt-2">
                        <textarea type="text"  id="question" ref={inputRef} className="border-black-300 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-md w-full px-4 py-2 mt-2 h-24" placeholder="Enter question here" />
                      </div>
                      <div>Add 4 options to this question</div>
                      <div className="flex items-center mt-2">
                        <label htmlFor="correctAnswerA"> A</label>
                        <input type="text" id="optionA" ref={optionARef} className="border-black-300 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-md w-full px-4 py-2 mt-2 ml-2" placeholder="Enter option A" />
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <input type="radio" id="correctAnswerB" name="correctAnswer" value="B" ref={correctAnswerBRef} className="mr-2" /> */}
                        <label htmlFor="correctAnswerB"> B</label>
                        <input type="text" id="optionB" ref={optionBRef} className="border-black-300 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-md w-full px-4 py-2 mt-2 ml-2" placeholder="Enter option B" />
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <input type="radio" id="correctAnswerC" name="correctAnswer" value="C" ref={correctAnswerCRef} className="mr-2" /> */}
                        <label htmlFor="correctAnswerC"> C</label>
                        <input type="text" id="optionC" ref={optionCRef} className="border-black-300 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-md w-full px-4 py-2 mt-2 ml-2" placeholder="Enter option C" />
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <input type="radio" id="correctAnswerD" name="correctAnswer" value="D" ref={correctAnswerDRef} className="mr-2" /> */}
                        <label htmlFor="correctAnswerD"> D</label>
                        <input type="text" id="optionD" ref={optionDRef} className="border-black-300 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-md w-full px-4 py-2 mt-2 ml-2" placeholder="Enter option D" />
                      </div>
                      <div>Choose Correct answer</div>

                      <label htmlFor="correctAnswerA pl-1"> Option A </label>
                      <input type="radio" id="correctAnswerA" name="correctAnswer" value="A" ref={correctAnswerRef} className="mr-2" />
                      <label htmlFor="correctAnswerA pl-1"> Option B </label>
                      <input type="radio" id="correctAnswerA" name="correctAnswer" value="B" ref={correctAnswerRef} className="mr-2" />
                      <label htmlFor="correctAnswerA pl-1"> Option C </label>
                      <input type="radio" id="correctAnswerA" name="correctAnswer" value="C" ref={correctAnswerRef} className="mr-2" />
                      <label htmlFor="correctAnswerA pl-1"> Option D </label>
                      <input type="radio" id="correctAnswerA" name="correctAnswer" value="D" ref={correctAnswerRef} className="mr-2" />

                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleAdd}>
                    Add
                  </button>
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>
                    Cancel
                  </button>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>

        </div>



      </Dialog>
    </Transition.Root >
  )
}
