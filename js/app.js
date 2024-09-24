import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import DownIcon from "./icons/down.js";

export default function App() {
  return html`<div class="border-right" style="width: 20rem">
      <div class="p-3 border-bottom">
        <div class="flex align-items-center justify-content-between mb-1 py-1">
          <div class="flex">
            <div class="circle bg-black me-2">
              <small>PI</small>
            </div>
            <span>Playful Industries</span>
          </div>
          <${DownIcon} />
        </div>
        <div class="flex align-items-center p-1">
          <img src="./icons/search.svg" height="18" class="me-2" />
          <span>Search</span>
        </div>
        <div class="flex align-items-center p-1">
          <img src="./icons/bell.svg" height="18" class="me-2" />
          <span>Notifications</span>
        </div>
        <div class="flex align-items-center p-1">
          <img src="./icons/backlog.svg" height="18" class="me-2" />
          <span>All Tasks</span>
        </div>
      </div>
      <div class="p-3">
        <div class="flex justify-content-between align-items-center mb-2">
          <small>BOARDS</small>
          <img src="./icons/plus.svg" height="18" />
        </div>
        <div class="flex align-items-center p-1">
          <img src="./icons/spa.svg" height="18" class="me-2" />
          <span>Design</span>
        </div>
        <div class="flex align-items-center p-1">
          <img src="./icons/leaf.svg" height="18" class="me-2" />
          <span>Green Initiatives</span>
        </div>
        <div class="bg-black rounded flex align-items-center p-1">
          <img src="./icons/pyramid-white.svg" height="18" class="me-2" />
          <span>Active Development</span>
        </div>
      </div>
    </div>
    <div class="w-100">
      <div class="flex justify-content-between border-bottom p-3 px-4">
        <div class="flex align-items-center">
          <img src="./icons/pyramid.svg" height="18" class="me-2" />
          <span>Active Development</span>
        </div>
        <div class="flex align-items-center">
          <span>Settings</span>
          <img src="./icons/down.svg" />
        </div>
      </div>
      <div class="p-3 flex">
        <div class="w-33">
          <div class="p-3 pb-0 flex align-items-center justify-content-between">
            <div class="flex">
              <span class="circle me-2 border-dashed"></span>
              <span>To Do</span>
            </div>
            <div class="flex">
              <img src="./icons/plus.svg" alt="plus" />
              <img src="./icons/dots.svg" alt="plus" />
            </div>
          </div>
          <div class="column">
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>BUG FIXES</small>
              </div>
              <div class="my-2">Fix the bugs found in log-in process</div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>1</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/attachment.svg" height="18" />
                  <span>1</span>
                </div>
              </div>
            </div>
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>UX IMPROVEMENTS</small>
              </div>
              <div class="my-2">
                Improve scrolling performance in large boards
              </div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>2</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>4</span>
                </div>
              </div>
            </div>
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>CARDS</small>
              </div>
              <div class="my-2">Custom fields in cards</div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>1</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-33">
          <div class="p-3 pb-0 flex align-items-center justify-content-between">
            <div class="flex">
              <span class="circle me-2"></span>
              <span>In Progress</span>
            </div>
            <div class="flex">
              <img src="./icons/plus.svg" alt="plus" />
              <img src="./icons/dots.svg" alt="plus" />
            </div>
          </div>
          <div class="column">
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>ONBOARDING</small>
              </div>
              <div class="my-2">Improve signup flow</div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>2</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>4</span>
                </div>
              </div>
            </div>
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>DOCUMENTS</small>
              </div>
              <div class="my-2">Add initial version of documents to app</div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>2</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-33">
          <div class="p-3 pb-0 flex align-items-center justify-content-between">
            <div class="flex">
              <span class="circle me-2 bg-black"></span>
              <span>Done</span>
            </div>
            <div class="flex">
              <img src="./icons/plus.svg" alt="plus" />
              <img src="./icons/dots.svg" alt="plus" />
            </div>
          </div>
          <div class="column">
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>COLOUR</small>
              </div>
              <div class="my-2">Remove all colour from the app</div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>2</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>4</span>
                </div>
              </div>
            </div>
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>TAGS</small>
              </div>
              <div class="my-2">Follow up work on tags</div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>2</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>4</span>
                </div>
              </div>
            </div>
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>CARD DESCRIPTIONS</small>
              </div>
              <div class="my-2">
                Improve editing features in card descriptions so text can be
                richer than before
              </div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>2</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>4</span>
                </div>
              </div>
            </div>
            <div class="card border cursor-pointer rounded p-2 m-3 bg-white">
              <div>
                <small>COLOUR</small>
              </div>
              <div class="my-2">Found some more colour, so remove that too</div>
              <div class="flex align-items-center">
                <div class="circle me-2 bg-black"><small>AH</small></div>
                <div class="flex align-items-center me-2">
                  <img src="./icons/tag.svg" height="18" />
                  <span>2</span>
                </div>
                <div class="flex align-items-center">
                  <img src="./icons/comment.svg" height="18" />
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> `;
}
