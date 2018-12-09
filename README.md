# ESLint Outdated Rules Checker

ESLint outdated rules checker is a software to checking the following types of outdated rules

- All the rules that have been deprecated/removed, but are still used in the project.
- New rules that have been added to ESLint, but are missing in the project.

### Dependencies
- Node@v8.0.0
- ESLint@v1.0.0
- ESLint@v3.0.0
- ESLint@v4.0.0
- ESLint@v5.0.0
- ESLint@v5.7.0


### Installation

- Install [node][1]

        sudo apt install nodejs
        
**Note:** Dependencies are preincluded with project. No extra installation is required
 
 
 ### Running
 
 - Go to the project's root directory
 - Type following commands:
 
        node RuleCheckerScript.js <sample_project_path>
        
 **Note:** Sample projects are already included in `SampleProjects` folder. Use absolute or relative path of any of the project for command line argument.
 
 #### Examples
 
 There are 5 sampleprojects in `SampleProjects` Directory. To test them, Use:
 
        node RuleCheckerScript.js SampleProjects/SampleProject1

or

        node RuleCheckerScript.js SampleProjects/SampleProject3

or

        node RuleCheckerScript.js SampleProjects/SampleProject4

or

        node RuleCheckerScript.js SampleProjects/SampleProject5
        
or
  
          node RuleCheckerScript.js SampleProjects/SampleProjectLatest
          
          


For any query, feel free and contact me


**Prateek Agrawal**  
prateekagrawal89760@gmail.com  
[Website][400] | [LinkedIn][500] | (+91) 7464847884

#### Thanks for Reading


 [400]: http://agrawalprateek.me
 [500]: https://www.linkedin.com/in/agrawal-prateek

[1]: [https://nodejs.org/en/download/]
