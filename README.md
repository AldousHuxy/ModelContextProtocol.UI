# Letter's of Map Change

### Core Features
- **Tools**: performs a single operation with clearly defined inputs and outputs
  - `upload-lomc`: Upload a new letter of map change for analysis
- **Resources**: access this information directly and decide how to use it
  - `lomcs://all`: The names of all letters of map changes
  - `lomcs//{lomcId}/details`: The file contents of a letter of map change
- **Prompts**: user-controlled, requiring explicit invocation
  - `summarize`: Summarize a letter of map change
  - `tie-ins`: Analyze the upstream and downstream tie-ins
  - `requirements`: Check for all required fields