export default {
    body: `
        <video id="vsPlayVideo-video"></video>
        <div class="vsPlayVideo-menu">
            <div class="vsPlayVideo-menu-btn vsPlayVideo-menu-play vsPlayVideo-menu-hover">
                <div class="vsPlayVideo-play" id="vsPlayVideo-play">
                    <svg t="1558104809912" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1998" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M873.575707 390.408009c105.592905 67.195485 105.592905 172.788391 0 239.983877L300.814189 991.967592c-105.592905 67.195485-191.987101 25.59828-191.987101-95.99355V128.025638c0-121.591831 83.19441-163.189036 191.987101-95.99355l572.761518 358.375921z" p-id="1999"></path></svg>
                </div>
                <div class="vsPlayVideo-pause" id="vsPlayVideo-pause">
                    <svg t="1558159147762" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2000" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M735.9 64.9c-51.2 0-96 44.7-96 95.8v702.6c0 51.1 44.8 95.8 96 95.8s96-44.7 96-95.8V160.7c0-51.1-44.8-95.8-96-95.8z m-447.8 0c-51.2 0-96 44.7-96 95.8v702.6c0 51.1 44.8 95.8 96 95.8s96-44.7 96-95.8V160.7c-0.1-51.1-44.9-95.8-96-95.8z" p-id="2001"></path></svg>
                </div>
            </div>
            <div class="vsPlayVideo-menu-btn vsPlayVideo-menu-bar">
                <div class="vsPlayVideo-percent" id="vsPlayVideo-bar">
                    <div class="vsPlayVideo-line-loading" id="vsPlayVideo-barLoading" style="width: 0%;"></div>
                    <div class="vsPlayVideo-line" id="vsPlayVideo-barNow" style="width: 0%;"></div>
                </div>
            </div>
            <div class="vsPlayVideo-menu-btn vsPlayVideo-menu-time">
                <span id="vsPlayVideo-time">00:00 / 00:00</span>
            </div>
            <div class="vsPlayVideo-menu-btn vsPlayVideo-menu-volume vsPlayVideo-menu-hover">
                <div id="vsPlayVideo-volume-icon">
                    <svg t="1558105138011" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2047" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M476.8 72c57.6-44.8 102.4-20.8 102.4 51.2l0 784c0 68.8-44.8 89.6-96 44.8L252.8 763.2 126.4 763.2c-72 0-126.4-57.6-126.4-126.4L0 379.2c0-68.8 57.6-126.4 126.4-126.4l120 0L476.8 72zM712 718.4c-14.4 0-24-6.4-30.4-14.4-20.8-20.8-20.8-44.8 0-62.4 75.2-75.2 75.2-188.8 0-264-20.8-20.8-20.8-44.8 0-62.4 20.8-20.8 44.8-20.8 65.6 0 116.8 105.6 116.8 276.8 0 384C729.6 715.2 726.4 718.4 712 718.4zM838.4 790.4c-20.8-20.8-20.8-44.8 0-62.4 120-120 120-308.8 0-428.8-20.8-20.8-20.8-44.8 0-62.4 20.8-20.8 44.8-20.8 65.6 0 75.2 75.2 120 171.2 120 270.4s-44.8 201.6-120 270.4c-6.4 6.4-20.8 14.4-30.4 14.4C859.2 801.6 846.4 793.6 838.4 790.4z" p-id="2048" data-spm-anchor-id="a313x.7781069.0.i0"></path></svg>
                </div>
                <div class="vsPlayVideo-volume-bar">
                    <span id="vsPlayVideo-volume-text">100</span>
                    <div class="vsPlayVideo-volume-percent" id="vsPlayVideo-volume">
                        <div class="vsPlayVideo-volume-line" id="vsPlayVideo-volume-line"></div>
                    </div>
                </div>
            </div>
            <div class="vsPlayVideo-menu-btn vsPlayVideo-menu-speed vsPlayVideo-menu-hover">
                <svg t="1558176708638" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1967" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M786.322636 372.268514h-198.154017L710.058931 30.434556a23.105782 23.105782 0 0 0 1.462392-7.311956 24.056336 24.056336 0 0 0-25.006891-23.252022h-248.606515a24.202575 24.202575 0 0 0-23.252022 16.086304L214.527651 574.663466a23.105782 23.105782 0 0 0-1.462392 7.311956 24.056336 24.056336 0 0 0 25.006891 23.252021h220.96732l-46.86964 392.944534c0 0.731196-0.731196 1.75487-0.731195 2.486065a24.056336 24.056336 0 0 0 25.00689 23.252021 24.641293 24.641293 0 0 0 21.935869-13.600239l349.877111-604.771908a21.497152 21.497152 0 0 0 2.486065-9.651783 23.544499 23.544499 0 0 0-24.348815-23.617619z" fill="#999999" p-id="1968"></path></svg>
                <div class="vsPlayVideo-speed-menu">
                    <ul>
                        <li class="vsPlayVideo-speed-btn">2.0x</li>
                        <li class="vsPlayVideo-speed-btn">1.5x</li>
                        <li class="vsPlayVideo-speed-btn">1.25x</li>
                        <li class="vsPlayVideo-speed-btn" style="color: rgb(3, 169, 244); background-color: rgb(226, 226, 226);">1.0x</li>
                        <li class="vsPlayVideo-speed-btn">0.75x</li>
                        <li class="vsPlayVideo-speed-btn">0.5x</li>
                    </ul>
                </div>
            </div>
            <div class="vsPlayVideo-menu-btn vsPlayVideo-menu-Full vsPlayVideo-menu-hover" id="vsPlayVideo-full">
                <svg t="1558105987332" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9638" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M629.557 391.972c17.329 17.32 47.028 17.32 66.815 0l168.302-165.814v133.637c0 19.806 14.85 34.647 34.637 34.647h24.743c19.806 0 34.657-12.372 34.657-29.692V119.733h-2.479l2.479-17.318c0-9.904-2.479-17.33-7.436-24.752-4.936-4.948-14.848-9.895-24.743-9.895h-17.327L664.211 65.29c-19.805 0-34.654 17.329-34.654 34.646v24.752c2.478 22.274 19.789 34.646 39.593 34.646h128.69L632.036 325.149c-22.283 17.319-22.283 47.026-2.478 66.823zM394.44 629.557c-17.31-17.327-47.009-17.327-66.815 0l-168.3 165.807V664.195c0-19.787-14.833-34.638-34.638-34.638h-24.76c-19.788 0-34.639 12.372-34.639 29.699v242.533h2.478l-2.478 17.327c0 9.894 2.478 17.31 7.416 24.744 4.956 4.956 14.868 9.894 24.761 9.894h17.328l244.993 2.478c19.823 0 34.655-17.328 34.655-34.638v-24.76c-2.478-22.266-19.788-34.638-39.593-34.638H226.16l168.283-165.824c17.327-17.327 17.327-47.027-0.001-66.815z m561.79 274.709v-242.55c0-19.787-17.329-29.68-34.639-29.68h-24.759c-19.788 0-34.639 17.31-34.639 34.638v131.168l-168.3-165.806c-17.309-17.329-47.01-17.329-66.816 0-17.326 17.31-17.326 47.009 0 66.814l168.284 165.806h-128.69c-19.787 0-37.116 12.388-39.594 34.654v24.745c0 19.805 17.33 34.654 34.64 34.654l240.071-2.478h17.329c9.893 0 17.31-2.478 24.743-9.894 4.955-4.956 7.415-14.85 7.415-24.744l4.955-17.327c-2.478 0 0 0 0 0zM228.636 159.335h128.69c19.806 0 37.116-12.373 39.593-34.646V99.936c0-19.797-17.309-34.646-34.654-34.646l-244.993 2.478H99.927c-9.876 0-17.31 2.478-24.743 9.895-4.939 4.956-7.416 14.849-7.416 24.752l2.477 17.318h-2.477v245.018c0 19.797 14.85 29.692 34.638 29.692h24.743c19.823 0 34.655-14.841 34.655-34.646v-133.64l168.283 165.815c17.345 17.32 47.045 17.32 66.832 0 17.33-17.327 17.33-47.026 0-66.823L228.636 159.335z m0 0" p-id="9639"></path></svg>
            </div>
        </div>
        <div class="vsPlayVideo-pendant-play">
            <svg t="1558179866308" class="icon" style="width: 100%;height: 100%;color:#fff;opacity: 0.5;" viewBox="0 0 1437 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7253" xmlns:xlink="http://www.w3.org/1999/xlink" width="280.6640625" height="200"><defs><style type="text/css"></style></defs><path d="M1177.988991 67.617025 228.472905 67.617025c-126.164199 0-228.453058 124.199395-228.453058 277.37468l0 401.613769c0 153.175285 102.28886 277.37468 228.453058 277.37468l949.535933 0c126.164199 0 228.453058-124.199395 228.453058-277.37468L1406.461896 344.991705C1406.461896 191.81642 1304.15319 67.617025 1177.988991 67.617025zM703.221025 667.894255l-174.133189 122.07582L529.087836 545.818436 529.087836 301.646949l174.133189 122.07582 174.153035 122.095666L703.221025 667.894255z" p-id="7254"></path></svg>
        </div>
    `,
}