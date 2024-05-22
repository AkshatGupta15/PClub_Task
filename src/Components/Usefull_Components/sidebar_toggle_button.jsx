import React from 'react'

export const Sidebar_toggle_button = ({id}) => {
  return (
    <>
    <input
                id={id}
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor={id} className="drawer-button">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="">
                      <button
                        className="btn btn-circle  btn-sm"
                        onClick={() => {
                          const checkbox =
                            document.getElementById(id);

                          if (checkbox && checkbox.checked) {
                            checkbox.checked = false;
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </label>
              </div>
    </>
  )
}
