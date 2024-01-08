/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [

    {
        title : "AutoSpill: Credential Leakage from Mobile Password Managers",
        link: "https://dl.acm.org/doi/10.1145/3577923.3583658",
        authors : "Ankit Gangwal, Shubham Singh, Abhijeet Srivastava",
        conferences : "13th ACM Conference on Data and Application Security and Privacy (ACM CODASPY 2023)",
        researchYr : 2022,
        image : "assets/images/research-page/dialogueState.png",
        abstract: "Password managers (PMs) are becoming increasingly popular on mobile devices, especially on small-screen devices, mainly due to the convenience of automatically filling credentials into login forms. Modern mobile OSes advocate for system-wide autofill frameworks to support autofilling on browsers as well as other apps. Mobile OSes also empower apps to directly render web content within WebView controls without redirecting users to the main browser. \par We present a novel technique, called AutoSpill, to leak users' saved credentials during an autofill operation on a webpage loaded into an app's WebView. AutoSpill conveniently dodges the secure autofill process. The majority of popular Android PMs considered in our experiments were found vulnerable to AutoSpill; even when the app hosting the WebView is not actively participating in the leak. Android intermediates in the autofill process because of its app sandboxing. Hence, the responsibility for any credential leakage is often stranded between PMs and the Android system. We investigate the root causes of AutoSpill and propose countermeasures to fundamentally fix AutoSpill for both the parties. We responsibly disclosed our findings to the affected PMs and Android security team.",
        absbox: "absPopup4"
    },

    {
        title : "BLEWhisperer: Exploiting BLE Advertisements for Data Exfiltration",
        link: "https://arxiv.org/abs/2204.08042",
        authors : "Ankit Gangwal, Shubham Singh, Riccardo Spolaor, Abhijeet Srivastava",
        conferences : "27th European Symposium on Research in Computer Security (ESORICS 2022)",
        researchYr : 2022,
        image : "assets/images/research-page/deepNetwork.png",
        abstract: "Bluetooth technology has enabled short-range wireless communication for billions of devices. Bluetooth Low-Energy (BLE) variant aims at improving power consumption on battery-constrained devices. BLE-enabled devices broadcast information (e.g., as beacons) to nearby devices via advertisements. Unfortunately, such functionality can become a double-edged sword at the hands of attackers. In this paper, we primarily show how an attacker can exploit BLE advertisements to exfiltrate information from BLE-enable devices. In particular, our attack establishes a communication medium between two devices without requiring any prior authentication or pairing. We develop a proof-of-concept attack framework on the Android ecosystem and assess its performance via a thorough set of experiments. Our results indicate that such an exfiltration attack is indeed possible though with a limited data rate. Nevertheless, we also demonstrate potential use cases and enhancements to our attack that can further its severeness. Finally, we discuss possible countermeasures to prevent such an attack.",
        absbox: "absPopup6"
    }
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image,link, title, authors, conferences, researchYr, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    
                    <a href="${link}" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> 
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}
                        </div>
                    </div>
        
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>

                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

