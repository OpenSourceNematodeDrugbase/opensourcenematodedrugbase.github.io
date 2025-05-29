<template>
  <div class="drug-target-form-container">
    <h2>Add New Drug Targets</h2>
    <div class="intro-section">
      <p>
        You can add drug targets automatically to the database here. Please be aware
        that using the 'delete all entries' button will remove ALL data and is not recommended. Please refrain from using
        special characters such as &amp;*,!?.
      </p>

      <p>
        You can upload JSON files to add new entries.
      </p>

      <button @click="triggerFileInput" class="admin-button">Upload JSON</button>
      <button @click="deleteAllEntries" class="admin-button danger-button">Delete All Entries (Dev)</button>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        class="file-upload"
        accept="application/json"
        multiple
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getDatabase, ref as dbRef, push, set, remove } from 'firebase/database';

export default {
  setup() {

    const db = getDatabase();
    const fileInput = ref(null); // Add this line

    const handleFileUpload = (event) => {
      const files = event.target.files;
      if (!files.length) return;

      const dataRef = dbRef(db, 'drugTargets');
      const allPromises = [];

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
          reader.onload = (e) => {
            try {
              const jsonData = JSON.parse(e.target.result);

              if (Array.isArray(jsonData)) {
                // If array, push each object individually
                const innerPromises = jsonData.map(item => {
                  const newRef = push(dataRef);
                  return set(newRef, item);
                });
                Promise.all(innerPromises).then(resolve).catch(reject);
              } else if (typeof jsonData === 'object' && jsonData !== null) {
                // Single object
                const newRef = push(dataRef);
                set(newRef, jsonData).then(resolve).catch(reject);
              } else {
                reject(new Error('Uploaded JSON must be an object or an array of objects.'));
              }
            } catch (error) {
              reject(new Error('Invalid JSON file.'));
            }
          };
          reader.onerror = () => reject(new Error('Failed to read file.'));
        });
        reader.readAsText(file);
        allPromises.push(promise);
      });

      Promise.all(allPromises)
        .then(() => alert('All files uploaded successfully!'))
        .catch(error => {
          console.error('Error uploading files:', error);
          alert(`Upload failed: ${error.message}`);
        });
    };


    const deleteAllEntries = () => {
      if (confirm("Are you sure you want to delete ALL entries? This cannot be undone.")) {
        const targetRef = dbRef(db, 'drugTargets');
        remove(targetRef)
          .then(() => {
            alert("All entries deleted.");
          })
          .catch((error) => {
            console.error("Error deleting entries:", error);
            alert("Failed to delete entries.");
          });
      }
    };



    const triggerFileInput = () => { // Add this function
      fileInput.value.click();
    };

    return {
      handleFileUpload,
      triggerFileInput,
      fileInput,
      deleteAllEntries
    };
  },
};
</script>

<style scoped>
.drug-target-form-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.drug-target-form-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
.drug-target-form-container p {
  margin-bottom: 10px;
  color: #555;
}

.intro-section {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.drug-target-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-section {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.form-section:last-child {
  border-bottom: none;
}

.form-section h3 {
  margin-bottom: 15px;
  color: #444;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
  margin-top: 10px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #007bff;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #0056b3;
}

.button-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.admin-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1em;
  margin-right: 5px;
  margin-left: 5px;
}
.admin-button:hover {
  background-color: #0056b3;
}

.file-upload {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.file-upload-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: #e9ecef;
  border: 2px dashed #aaa;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  width: 250px;
  box-sizing: border-box;
}

.file-upload-wrapper span {
  margin-right: 10px;
  color: #555;
}

.file-upload-wrapper span:last-child {
  font-weight: bold;
  color: #007bff;
}

.danger-button {
  background-color: #dc3545;
}
.danger-button:hover {
  background-color: #a71d2a;
}
</style>
