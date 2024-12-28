```javascript
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'cancel') {
        console.log('User canceled the picker');
      } else if (result.uri) {
        setSelectedFile(result);
      } else {
        console.warn('DocumentPicker returned an unexpected result:', result);
        //Handle error more gracefully
        alert('Error picking the document. Please try again');
      }
    } catch (error) {
      console.error('Error picking document:', error);
      alert('An error occurred. Please try again.');
    }
  };
  // ...rest of the code
}
```