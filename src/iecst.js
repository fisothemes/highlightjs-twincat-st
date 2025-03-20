hljs.registerLanguage("iec-st", function (hljs) {
    return {
      case_insensitive: true,
      keywords: {
        // Structural and block keywords, including those used for declaring pointers and arrays.
        keyword:
          "PROGRAM END_PROGRAM FUNCTION END_FUNCTION FUNCTION_BLOCK END_FUNCTION_BLOCK INTERFACE END_INTERFACE PROPERTY END_PROPERTY METHOD END_METHOD ACTION END_ACTION TYPE END_TYPE STRUCT END_STRUCT UNION END_UNION " +
          "VAR END_VAR VAR_INPUT VAR_OUTPUT VAR_IN_OUT VAR_GLOBAL VAR_TEMP VAR_EXTERNAL VAR_STAT VAR_INST " +
          "REFERENCE TO POINTER TO ARRAY OF " +
          // Control flow and other constructs:
          "IF THEN ELSE END_IF FOR TO DO END_FOR WHILE END_WHILE REPEAT UNTIL END_REPEAT CASE OF END_CASE RETURN CONTINUE EXIT JMP JMPC JMPCN " +
          "AND OR ORN AND_THEN OR_ELSE XOR XORN NOT ",
        // Built-in data types are separated into their own group.
        type:
          "INT DINT REAL LREAL BOOL STRING ANY ANY_BIT ANY_DATE ANY_NUM ANY_REAL ANY_INT ANY_STRING TIME DATE LTIME DT DATE_AND_TIME DATE TIME_OF_DAY TOD BYTE WORD DWORD LWORD SINT USINT UINT UDINT ULINT LINT __XINT __UXINT WSTRING __SYSTEM %I* %Q* ",
        // Reserved literal values.
        literal: "TRUE FALSE ",
        // Built-in functions (e.g., math functions).
        built_in:
          // Mathematical Functions
          "ABS SQRT LN LOG EXP EXPT " +
          // Trigonometric Functions
          "SIN COS TAN ASIN ACOS ATAN ATAN2 " +
          // Bitwise Operations
          "SHL SHR ROL ROR " +
          // Comparison & Logical Functions
          "GT GE LT LE EQ NE AND OR XOR NOT AND_THEN OR_ELSE MIN MAX LIMIT SEL MUX " +
          // Type Conversion Functions
          "TO_INT TO_DINT TO_LINT TO_UINT TO_UDINT TO_ULINT TO_REAL TO_LREAL TO_STRING TO_WSTRING TO_BOOL TO_TIME TO_DATE TO_LTIME TO_DT TO_DATE_AND_TIME TO_TOD TO_BYTE TO_WORD TO_DWORD TO_LWORD " +
          "TRUNC TRUNC_INT SIZEOF XSIZEOF " +
          // Memory & Pointer Operations
          "THIS SUPER __NEW __DELETE ADR __ISVALIDREF __QUERYINTERFACE __QUERYPOINTER __VARINFO __POUNAME __POSITION " +
          // Array Functions
          "UPPER_BOUND LOWER_BOUND "
      },
      contains: [
        // Single-line comments using //
        hljs.C_LINE_COMMENT_MODE,
        // Multi-line comments: (* ... *)
        {
          className: "comment",
          begin: /\(\*/,
          end: /\*\)/
        },
        // String literals supporting both double and single quotes.
        {
          className: "string",
          variants: [
            {
              begin: /"/,
              end: /"/,
              contains: [
                { begin: /\$\w?/, relevance: 0 }
              ]
            },
            {
              begin: /'/,
              end: /'/,
              contains: [
                { begin: /\$\w?/, relevance: 0 }
              ]
            }
          ]
        },
        // Meta blocks for pragmas, e.g. {attribute ...}
        {
          className: "meta",
          begin: /\{/,
          end: /\}/,
          contains: [
            {
              className: "keyword",
              begin: /\w+/
            }
          ]
        },
        // Number literals (e.g., 123, 3.14).
        hljs.NUMBER_MODE
      ]
    };
  });