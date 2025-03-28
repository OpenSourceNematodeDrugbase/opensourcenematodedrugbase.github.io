<template>
  <div class="drug-target-form-container">
    <h2>New Drug Target Entry Form</h2>
    <div class="intro-section">
      <p>
        You can add drug targets manually to the database here. Please be aware
        that data cannot be deleted at this time. Please refrain from using
        special characters such as &amp;*,!?.
      </p>

      <p>
        Additionally, you can upload JSON files to add new entries. Please ensure
        the JSON follows the template before uploading.
      </p>

      <button @click="downloadJsonTemplate" class="admin-button">Download JSON Template</button>
      <button @click="triggerFileInput" class="admin-button">Upload JSON Template</button>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        class="file-upload"
        accept="application/json"
      />
    </div>

    <form @submit.prevent="submitForm" class="drug-target-form">
      <section class="form-section">
        <h3>Drug Target Name & Ratings</h3>
        <div class="form-group">
          <label for="targetName">Target Name:</label>
          <input
            type="text"
            id="targetName"
            v-model="formData.targetName"
            required
          />
        </div>

        <div class="form-group">
          <label for="functionalImportanceRating">Functional Importance Rating:</label>
          <select
            id="functionalImportanceRating"
            v-model="formData.functionalImportanceRating"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div class="form-group">
          <label for="pathogenSpecificityRating">Pathogen Specificity Rating:</label>
          <select
            id="pathogenSpecificityRating"
            v-model="formData.pathogenSpecificityRating"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div class="form-group">
          <label for="molecularAccessibilityRating">Molecular Accessibility Rating:</label>
          <select
            id="molecularAccessibilityRating"
            v-model="formData.molecularAccessibilityRating"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div class="form-group">
          <label for="druggabilityRating">Druggability Rating:</label>
          <select
            id="druggabilityRating"
            v-model="formData.druggabilityRating"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </section>

      <section class="form-section">
        <h3>Drug Target Properties</h3>
        <div class="form-group">
          <label for="essentiallyScore">Essentially Score:</label>
          <select
            id="essentiallyScore"
            v-model="formData.essentiallyScore"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div class="form-group">
          <label for="phenotypeEffectLethal">Phenotype Effect Lethal:</label>
          <select
            id="phenotypeEffectLethal"
            v-model="formData.phenotypeEffectLethal"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div class="form-group">
          <label for="expressionStage">Expression Stage:</label>
          <input
            type="text"
            id="expressionStage"
            v-model="formData.expressionStage"
          />
        </div>

        <div class="form-group">
          <label for="pathwayEssentially">Pathway Essentially:</label>
          <select
            id="pathwayEssentially"
            v-model="formData.pathwayEssentially"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div class="form-group">
          <label for="uniqueParasiteMetabolicPathway">Unique Parasite Metabolic Pathway:</label>
          <select
            id="uniqueParasiteMetabolicPathway"
            v-model="formData.uniqueParasiteMetabolicPathway"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div class="form-group">
          <label for="orthologComparison">Ortholog Comparison:</label>
          <select
            id="orthologComparison"
            v-model="formData.orthologComparison"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div class="form-group">
          <label for="hostHomology">Host Homology:</label>
          <input
            type="number"
            id="hostHomology"
            v-model="formData.hostHomology"
          />
        </div>

        <div class="form-group">
          <label for="crossSpeciesConservation">Cross Species Conservation:</label>
          <select
            id="crossSpeciesConservation"
            v-model="formData.crossSpeciesConservation"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div class="form-group">
          <label for="orthologPercentageIdentity">Ortholog Percentage Identity:</label>
          <input
            type="number"
            id="orthologPercentageIdentity"
            v-model="formData.orthologPercentageIdentity"
          />
        </div>

        <div class="form-group">
          <label for="subCellularLocation">Sub Cellular Location:</label>
          <input
            type="text"
            id="subCellularLocation"
            v-model="formData.subCellularLocation"
          />
        </div>

        <div class="form-group">
          <label for="transportSystem">Transport System:</label>
          <input
            type="text"
            id="transportSystem"
            v-model="formData.transportSystem"
          />
        </div>

        <div class="form-group">
          <label for="druggabilityMethod">Druggability Method:</label>
          <input
            type="text"
            id="druggabilityMethod"
            v-model="formData.druggabilityMethod"
          />
        </div>

        <div class="form-group">
          <label for="tissueExpression">Tissue Expression:</label>
          <input
            type="text"
            id="tissueExpression"
            v-model="formData.tissueExpression"
          />
        </div>

        <div class="form-group">
          <label for="resistantPotential">Resistant Potential:</label>
          <input
            type="number"
            id="resistantPotential"
            v-model="formData.resistantPotential"
          />
        </div>

        <div class="form-group">
          <label for="bindingScore">Binding Score:</label>
          <input
            type="number"
            id="bindingScore"
            v-model="formData.bindingScore"
          />
        </div>

        <div class="form-group">
          <label for="proteinStructureAvailability">Protein Structure Availability:</label>
          <select
            id="proteinStructureAvailability"
            v-model="formData.proteinStructureAvailability"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </section>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getDatabase, ref as dbRef, push, set } from 'firebase/database';

export default {
  setup() {
    const formData = ref({
      targetName: '',
      functionalImportanceRating: 'High',
      essentiallyScore: 'true',
      phenotypeEffectLethal: 'true',
      expressionStage: '',
      pathwayEssentially: 'true',
      uniqueParasiteMetabolicPathway: 'true',
      pathogenSpecificityRating: 'High',
      orthologComparison: 'true',
      hostHomology: 0,
      crossSpeciesConservation: 'true',
      orthologPercentageIdentity: 0,
      molecularAccessibilityRating: 'Low',
      subCellularLocation: '',
      transportSystem: '',
      druggabilityMethod: '',
      tissueExpression: '',
      druggabilityRating: 'High',
      resistantPotential: 1,
      bindingScore: 1,
      proteinStructureAvailability: 'true',
    });

    const db = getDatabase();
    const fileInput = ref(null); // Add this line

    const submitForm = () => {
      const dataRef = dbRef(db, 'drugTargets');
      const newDrugTargetRef = push(dataRef);
      set(newDrugTargetRef, formData.value)
        .then(() => {
          alert('Drug target added successfully!');
          formData.value = {
            targetName: '',
            functionalImportanceRating: 'High',
            essentiallyScore: 'true',
            phenotypeEffectLethal: 'true',
            expressionStage: '',
            pathwayEssentially: 'true',
            uniqueParasiteMetabolicPathway: 'true',
            pathogenSpecificityRating: 'High',
            orthologComparison: 'true',
            hostHomology: 0,
            crossSpeciesConservation: 'true',
            orthologPercentageIdentity: 0,
            molecularAccessibilityRating: 'Low',
            subCellularLocation: '',
            transportSystem: '',
            druggabilityMethod: '',
            tissueExpression: '',
            druggabilityRating: 'High',
            resistantPotential: 1,
            bindingScore: 1,
            proteinStructureAvailability: 'true',
          };
        })
        .catch((error) => {
          console.error('Error adding drug target:', error);
          alert('Failed to add drug target. Please check the console for errors.');
        });
    };

    const downloadJsonTemplate = () => {
      const template = {
        targetName: '',
        functionalImportanceRating: 'High',
        essentiallyScore: 'true',
        phenotypeEffectLethal: 'true',
        expressionStage: '',
        pathwayEssentially: 'true',
        uniqueParasiteMetabolicPathway: 'true',
        immuneEvasionRole: 'true',
        pathogenSpecificityRating: 'High',
        orthologComparison: 'true',
        hostHomology: 0,
        crossSpeciesConservation: 'true',
        orthologPercentageIdentity: 0,
        molecularAccessibilityRating: 'Low',
        subCellularLocation: '',
        transportSystem: '',
        druggabilityMethod: '',
        tissueExpression: '',
        druggabilityRating: 'High',
        resistantPotential: 1,
        bindingScore: 1,
        proteinStructureAvailability: 'true',
      };
      const blob = new Blob([JSON.stringify(template, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'drug_target_template.json';
      a.click();
      URL.revokeObjectURL(url);
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          if (typeof jsonData === 'object' && jsonData !== null) {
            const dataRef = dbRef(db, 'drugTargets');
            const newDrugTargetRef = push(dataRef);
            set(newDrugTargetRef, jsonData)
              .then(() => {
                alert('JSON data uploaded and added successfully!');
              })
              .catch((error) => {
                console.error('Error uploading JSON data:', error);
                alert('Failed to upload JSON data. Please check the console for errors.');
              });
          } else {
            alert('Invalid JSON file. Please upload a valid JSON file.');
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          alert('Invalid JSON file. Please ensure the file is valid JSON.');
        }
      };
      reader.readAsText(file);
    };

    const triggerFileInput = () => { // Add this function
      fileInput.value.click();
    };

    return {
      formData,
      submitForm,
      downloadJsonTemplate,
      handleFileUpload,
      triggerFileInput, // Add this to the return
      fileInput, // Add this to the return
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
</style>
