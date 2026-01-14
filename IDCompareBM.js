javascript:(function(){
    
    const existingTool = document.getElementById('id-compare-tool-container');

    if (existingTool) {
        existingTool.remove();
        return;
    }
    const container = document.createElement('div');
    container.id = 'id-compare-tool-container';
    const style = document.createElement('style');
    style.innerHTML = `
        #id-compare-tool-container { 
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background: #f0f2f5; z-index: 9999; font-family: sans-serif; padding: 20px; box-sizing: border-box;
            overflow-y: auto;
        }
        .tool-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .container-grid { display: flex; gap: 20px; height: 75vh; }
        .column { flex: 1; display: flex; flex-direction: column; }
        label { font-weight: bold; margin-bottom: 8px; color: #333; }
        textarea { flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 4px; resize: none; font-family: monospace; }
        .controls { display: flex; gap: 10px; }
        button { padding: 10px 20px; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 4px; font-weight: bold; }
        button:hover { background: #0056b3; }
        button.clear { background: #6c757d; }
        button.close { background: #dc3545; }
        .count { font-size: 0.8em; color: #666; margin-top: 5px; }
    `;
    container.innerHTML = `
        <div class="tool-header">
            <h2>ID Comparison Tool</h2>
            <div class="controls">
                <button id="compareBtn">Compare</button>
                <button id="clearBtn" class="clear">Clear All</button>
                <button id="closeBtn" class="close">Close Tool</button>
            </div>
        </div>
        <div class="container-grid">
            <div class="column">
                <label>1. Clipboard IDs</label>
                <textarea id="col1" placeholder="Paste IDs here..."></textarea>
                <div id="count1" class="count">Count: 0</div>
            </div>
            <div class="column">
                <label>2. Excel IDs</label>
                <textarea id="col2" placeholder="Paste Excel IDs here..."></textarea>
                <div id="count2" class="count">Count: 0</div>
            </div>
            <div class="column">
                <label>3. Missing from Clipboard</label>
                <textarea id="col3" readonly placeholder="Results..."></textarea>
                <div id="count3" class="count">Count: 0</div>
            </div>
        </div>
    `;
    document.body.appendChild(style);
    document.body.appendChild(container);

    const t1 = document.getElementById('col1');
    const t2 = document.getElementById('col2');
    const t3 = document.getElementById('col3');

    const updateCounts = () => {
        document.getElementById('count1').innerText = 'Count: ' + (t1.value.trim() ? t1.value.trim().split(/\s+/).length : 0);
        document.getElementById('count2').innerText = 'Count: ' + (t2.value.trim() ? t2.value.trim().split(/\s+/).length : 0);
        document.getElementById('count3').innerText = 'Count: ' + (t3.value.trim() ? t3.value.trim().split(/\s+/).length : 0);
    };

    document.getElementById('compareBtn').onclick = function() {
        const list1 = new Set(t1.value.match(/\d+/g) || []);
        const list2 = t2.value.match(/\d+/g) || [];
        
        const missing = list2.filter(id => !list1.has(id));
        
        t3.value = [...new Set(missing)].join('\n');
        updateCounts();
    };

    document.getElementById('clearBtn').onclick = () => { t1.value = ''; t2.value = ''; t3.value = ''; updateCounts(); };
    document.getElementById('closeBtn').onclick = () => { container.remove(); };
    [t1, t2].forEach(t => t.oninput = updateCounts);
})();