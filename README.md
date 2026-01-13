# 🛠️ ID Comparison Tool

![GitHub](https://img.shields.io/badge/Tool-Bookmarklet-blue?style=for-the-badge&logo=github)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)

A lightweight, browser-based utility designed to identify missing IDs between two datasets. This tool operates as a bookmarklet, running entirely within your browser environment.

---

## 🚀 Installation

To install the tool, save the provided JavaScript code as a bookmark in your browser:

1. **Copy the Code**: Copy the entire script starting with `javascript:(function(){`.
2. **Create a Bookmark**: Open your browser's bookmarks bar and select **Add Page**.
3. **Paste the URL**: In the **URL** or **Address** field, paste the script you copied.
4. **Name It**: Label it `ID Compare Tool` and click **Save**.

---

## 📖 How to Use

### 1. Launch the Interface
Click the bookmark in your browser bar. A full-screen overlay with a background color of `#f0f2f5` and a high `z-index` of `9999` will appear on top of your current site.

### 2. Input Your Lists
The tool features three columns for data management:
* **Column 1 (Clipboard IDs)**: Paste your master list or "reference" IDs here.
* **Column 2 (Excel IDs)**: Paste the list you want to check for missing items here.
* **Column 3 (Missing from Clipboard)**: This read-only column displays the results.

### 3. Run Comparison
Click the **Compare** button to process the data. The tool performs the following:
* **Numeric Extraction**: It uses a regular expression (`\d+`) to find numbers even if the text contains extra characters or formatting.
* **Difference Check**: It identifies IDs in the Excel list that are not present in the Clipboard list.
* **Deduplication**: Results are automatically filtered to show only unique missing IDs.

### 4. Reset or Exit
* **Clear All**: Resets all text areas and sets the counters back to zero.
* **Close Tool**: Removes the interface container from your browser view.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Real-time Counter** | Automatically counts IDs in each box using whitespace-based splitting. |
| **Styling** | Built with a custom CSS layout for a professional, sans-serif appearance. |
| **Privacy** | All processing happens locally in your browser; no data is sent to external servers. |
| **Toggle Logic** | Clicking the bookmark again while the tool is open will automatically remove it. |

---

## 🛠️ Technical Specifications

* **Logic**: Uses a `Set` for the primary list to ensure high-performance lookups.
* **UI**: Injects a `<style>` tag and a `div` container directly into the `document.body`.
* **Regex**: Utilizes `/\d+/g` to ensure only numeric strings are captured for comparison.

---
