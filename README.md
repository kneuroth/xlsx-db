# xlsx-db
 
Simulates basic functionality of database with xlsx files. All xlsx files referenced must already exist. Recommended for prototyping and personal projects where a database is needed but only basic I/O functionality is required.
___
## Getting Started

### Installation 

```html
$ npm install xlsx-db
```

### Importing

```html
import xlsxdb from 'xlsx-db'
```
___
## Useage

### **findById**
Gets a record by id from a file that already exists.
```html
xlsxdb.findById(<id>, <X>)
```
Where `<id>` (int) is the id of the file (zero indexed) and `<X>` (string) is the filepath.

### **find**
Gets all records from a file that already exists.
```html
xlsxdb.find(<X>)
```
Where `<X>` (string) is the filepath.

### **remove**
Removes a record by id from a file that already exists.
```html
xlsxdb.remove(<id>, <X>)
```
Where `<id>` (int) is the id of the record and `<X>` (string) is the filepath.

### **post**
Adds a record to a file that already exists. Ids are generated automatically using the getLowestIntNotIn algorithm..
```html
xlsxdb.post(<record>, <X>)
```
Where `<record>` (object) is the record and `<X>` (string) is th filepath.

### **patch**
Edits a record by id in a file that alread exists. Must pass in a record that includes the `<id>` (int) field.
```html
xlsxdb.patch(<record>, <X>)
```
Where `<record>` (object) is the record with updated fields and id, and `<X>` (string) is the filepath.

### **populate**
Fills a file with array of data specified by the user.
```html
xlsxdb.populate(<data>, <X>)
```
Where `<data>` (array) is an array of json objects and `<X>` (string) is the filepath.

### **clear**
Completely deletes all data in a file including keys.
```html
xlsxdb.clear(<X>)
```
Where `<X>` (string) is the filepath.