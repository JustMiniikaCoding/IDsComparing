# 🛠️ ID Comparison Tool

![GitHub](https://img.shields.io/badge/Tool-Bookmarklet-blue?style=for-the-badge&logo=github)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)

[cite_start]A lightweight, browser-based utility designed to identify missing IDs between two datasets[cite: 1, 11]. [cite_start]This tool operates as a bookmarklet, running entirely within your browser environment[cite: 1, 16].

---

## 🚀 Installation

To install the tool, save the provided JavaScript code as a bookmark in your browser:

1. [cite_start]**Copy the Code**: Copy the entire script starting with `javascript:(function(){`[cite: 1].
2. **Create a Bookmark**: Open your browser's bookmarks bar and select **Add Page**.
3. [cite_start]**Paste the URL**: In the **URL** or **Address** field, paste the script you copied[cite: 1].
4. **Name It**: Label it `ID Compare Tool` and click **Save**.

---

## 📖 How to Use

### 1. Launch the Interface
Click the bookmark in your browser bar. [cite_start]A full-screen overlay with a background color of `#f0f2f5` and a high `z-index` of `9999` will appear on top of your current site[cite: 1, 2].

### 2. Input Your Lists
The tool features three columns for data management:
* [cite_start]**Column 1 (Clipboard IDs)**: Paste your master list or "reference" IDs here[cite: 13].
* [cite_start]**Column 2 (Excel IDs)**: Paste the list you want to check for missing items here[cite: 14].
* [cite_start]**Column 3 (Missing from Clipboard)**: This read-only column displays the results[cite: 15].

### 3. Run Comparison
[cite_start]Click the **Compare** button to process the data[cite: 11, 19]. The tool performs the following:
* [cite_start]**Numeric Extraction**: It uses a regular expression (`\d+`) to find numbers even if the text contains extra characters or formatting[cite: 19, 20].
* [cite_start]**Difference Check**: It identifies IDs in the Excel list that are not present in the Clipboard list[cite: 19, 20].
* [cite_start]**Deduplication**: Results are automatically filtered to show only unique missing IDs[cite: 20].

### 4. Reset or Exit
* [cite_start]**Clear All**: Resets all text areas and sets the counters back to zero[cite: 11, 21].
* [cite_start]**Close Tool**: Removes the interface container from your browser view[cite: 11, 22].

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Real-time Counter** | [cite_start]Automatically counts IDs in each box using whitespace-based splitting[cite: 17, 18]. |
| **Styling** | [cite_start]Built with a custom CSS layout for a professional, sans-serif appearance[cite: 2, 11]. |
| **Privacy** | [cite_start]All processing happens locally in your browser; no data is sent to external servers[cite: 1, 16]. |
| **Toggle Logic** | [cite_start]Clicking the bookmark again while the tool is open will automatically remove it[cite: 1]. |

---

## 🛠️ Technical Specifications

* [cite_start]**Logic**: Uses a `Set` for the primary list to ensure high-performance lookups[cite: 19].
* [cite_start]**UI**: Injects a `<style>` tag and a `div` container directly into the `document.body`[cite: 1, 16].
* [cite_start]**Regex**: Utilizes `/\d+/g` to ensure only numeric strings are captured for comparison[cite: 19, 20].

---
*Documentation generated for the ID Comparison Bookmarklet.*
