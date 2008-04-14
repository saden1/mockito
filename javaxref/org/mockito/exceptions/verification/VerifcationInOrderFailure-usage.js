setClassUsage('org.mockito.exceptions.verification.VerifcationInOrderFailure',
{"class":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockitousage","children":[{"kind":"package","name":"verification","classes":[{"name":"BasicVerificationInOrderTest","kind":"class","access":"public","line":19,"children":[{"name":"shouldFailOnFirstMethodBecauseOneInvocationWanted():void","kind":"method","access":"public","line":98,"leaves":[98]}]}]}]}]}]},"class":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockitousage","children":[{"kind":"package","name":"verification","classes":[{"name":"RelaxedVerificationInOrderTest","kind":"class","access":"public","line":22,"children":[{"name":"shouldFailVerificationOfNonFirstChunk():void","kind":"method","access":"public","line":119,"leaves":[119]}]}]}]}]}]},"class":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockitousage","children":[{"kind":"package","name":"verification","classes":[{"name":"RelaxedVerificationInOrderTest","kind":"class","access":"public","line":22,"children":[{"name":"shouldFailWhenMockTwoWantedZeroTimes():void","kind":"method","access":"public","line":209,"leaves":[209]}]}]}]}]}]},"this":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","classes":[{"name":"Reporter","kind":"class","access":"public","line":39,"children":[{"name":"tooLittleActualInvocationsInOrder(int,int,PrintableInvocation,HasStackTrace):void","kind":"method","access":"public","line":237,"leaves":[240]},{"name":"tooManyActualInvocationsInOrder(int,int,PrintableInvocation,HasStackTrace):void","kind":"method","access":"public","line":211,"leaves":[214]},{"name":"wantedButNotInvokedInOrder(PrintableInvocation,PrintableInvocation,HasStackTrace):void","kind":"method","access":"public","line":180,"leaves":[186]}]}]},{"kind":"package","name":"internal","children":[{"kind":"package","name":"verification","classes":[{"name":"NumberOfInvocationsInOrderVerifierTest","kind":"class","access":"public","line":22,"children":[{"name":"shouldReportTooManyInvocations():void","kind":"method","access":"public","line":72,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":81,"leaves":[81]}]},{"name":"shouldReportTooLittleInvocations():void","kind":"method","access":"public","line":58,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":67,"leaves":[67]}]}]}]}]}]},{"kind":"package","name":"mockitousage","children":[{"kind":"package","name":"verification","classes":[{"name":"RelaxedVerificationInOrderTest","kind":"class","access":"public","line":22,"children":[{"name":"shouldVerifyInteractionsFromAllChunksWhenAtLeastOnceMode():void","kind":"method","access":"public","line":100,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":107,"leaves":[107]}]},{"name":"shouldFailOnLastTwoInvocationsInWrongOrder():void","kind":"method","access":"public","line":231,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":237,"leaves":[237]}]},{"name":"shouldFailWhenMockTwoWantedZeroTimes():void","kind":"method","access":"public","line":209,"leaves":[209]},{"name":"shouldFailTimesZeroInOrder():void","kind":"method","access":"public","line":200,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":206,"leaves":[206]}]},{"name":"shouldFailOnLastAndFirstInWrongOrder():void","kind":"method","access":"public","line":240,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":246,"leaves":[246]}]},{"name":"shouldFailOnWrongMethodAfterLastInvocation():void","kind":"method","access":"public","line":249,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":255,"leaves":[255]}]},{"name":"shouldFailVerificationOfNonFirstChunk():void","kind":"method","access":"public","line":119,"leaves":[119]}]},{"name":"VerificationInOrderTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldVerifyInOrderUsingMatcher():void","kind":"method","access":"public","line":83,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":99,"leaves":[99]}]},{"name":"shouldVerifyInOrderWhenTwoChunksAreEqual():void","kind":"method","access":"public","line":66,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":80,"leaves":[80]}]},{"name":"shouldVerifySingleMockInOrderAndNotInOrder():void","kind":"method","access":"public","line":35,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":50,"leaves":[50]}]}]},{"name":"BasicVerificationInOrderTest","kind":"class","access":"public","line":19,"children":[{"name":"shouldFailOnSecondMethodBecauseDifferentMethodWanted():void","kind":"method","access":"public","line":171,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":177,"leaves":[177]}]},{"name":"shouldFailWhenFirstMockCalledTwice():void","kind":"method","access":"public","line":76,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":82,"leaves":[82]}]},{"name":"shouldFailOnLastMethodBecauseDifferentMethodWanted():void","kind":"method","access":"public","line":192,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":201,"leaves":[201]}]},{"name":"shouldFailOnLastMethodBecauseOneInvocationWantedAgain():void","kind":"method","access":"public","line":138,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":147,"leaves":[147]}]},{"name":"shouldFailWhenLastMockCalledTwice():void","kind":"method","access":"public","line":85,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":95,"leaves":[95]}]},{"name":"shouldFailOnSecondMethodBecauseDifferentArgsWanted():void","kind":"method","access":"public","line":162,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":168,"leaves":[168]}]},{"name":"shouldFailWhenLastMethodVerifiedFirst():void","kind":"method","access":"public","line":206,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":212,"leaves":[212]}]},{"name":"shouldFailWhenMiddleMethodVerifiedFirst():void","kind":"method","access":"public","line":215,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":221,"leaves":[221]}]},{"name":"shouldFailOnFirstMethodBecauseOneInvocationWantedAgain():void","kind":"method","access":"public","line":103,"leaves":[103]},{"name":"shouldFailWhenMiddleMethodVerifiedFirstInAtLeastOnceMode():void","kind":"method","access":"public","line":224,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":230,"leaves":[230]}]},{"name":"shouldFailOnLastMethodBecauseDifferentArgsWanted():void","kind":"method","access":"public","line":180,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":189,"leaves":[189]}]},{"name":"shouldFailOnFirstMethodBecauseOneInvocationWanted():void","kind":"method","access":"public","line":98,"leaves":[98]},{"name":"shouldFailOnLastMethodBecauseOneInvocationWanted():void","kind":"method","access":"public","line":126,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":135,"leaves":[135]}]},{"name":"shouldFailOnSecondMethodBecauseTwoInvocationsWantedAgain():void","kind":"method","access":"public","line":117,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":123,"leaves":[123]}]},{"name":"shouldFailOnSecondMethodBecauseFourInvocationsWanted():void","kind":"method","access":"public","line":108,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":114,"leaves":[114]}]}]},{"name":"ExactNumberOfTimesVerificationTest","kind":"class","access":"public","line":21,"children":[{"name":"shouldAllowVerifyingInteractionNeverHappenedInOrder():void","kind":"method","access":"public","line":110,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":124,"leaves":[124]}]}]},{"name":"DescriptiveMessagesOnVerificationInOrderErrorsTest","kind":"class","access":"public","line":24,"children":[{"name":"shouldPrintTooLittleInvocations():void","kind":"method","access":"public","line":163,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":174,"leaves":[174]}]},{"name":"shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious():void","kind":"method","access":"public","line":46,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":54,"leaves":[54]}]},{"name":"shouldPrintMethodThatWasNotInvoked():void","kind":"method","access":"public","line":114,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":123,"leaves":[123]}]},{"name":"shouldPrintTooManyInvocations():void","kind":"method","access":"public","line":136,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":143,"leaves":[143]}]}]},{"name":"VerificationInOrderMixedWithOrdiraryVerificationTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldFailOnLastInvocationTooEarly():void","kind":"method","access":"public","line":108,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":118,"leaves":[118]}]}]},{"name":"SelectedMocksInOrderVerificationTest","kind":"class","access":"public","line":17,"children":[{"name":"shouldThrowTooManyInvocationsForMockTwo():void","kind":"method","access":"public","line":149,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":156,"leaves":[156]}]},{"name":"shouldFailVerificationForMockTwo():void","kind":"method","access":"public","line":119,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":126,"leaves":[126]}]},{"name":"shouldThrowNoMoreInvocationsForMockTwo():void","kind":"method","access":"public","line":129,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":136,"leaves":[136]}]},{"name":"shouldFailVerificationForMockOne():void","kind":"method","access":"public","line":79,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":87,"leaves":[87]}]},{"name":"shouldThrowTooLittleInvocationsForMockTwo():void","kind":"method","access":"public","line":139,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":146,"leaves":[146]}]},{"name":"shouldFailVerificationForMockOneBecauseOfWrongOrder():void","kind":"method","access":"public","line":90,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":98,"leaves":[98]}]}]}]}],"classes":[{"name":"PointingStackTraceToActualInvocationChunkInOrderTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldPointStackTraceToPreviousInvocation():void","kind":"method","access":"public","line":53,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":61,"leaves":[61]}]},{"name":"shouldPointToThirdChunkWhenTooLittleActualInvocations():void","kind":"method","access":"public","line":78,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":87,"leaves":[87]}]},{"name":"shouldPointToThirdInteractionBecauseAtLeastOnceUsed():void","kind":"method","access":"public","line":66,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":73,"leaves":[73]}]},{"name":"shouldPointToFourthChunkBecauseTooManyActualInvocations():void","kind":"method","access":"public","line":92,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":99,"leaves":[99]}]}]},{"name":"PointingStackTraceToActualInvocationInOrderTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldPointToSecondMethod():void","kind":"method","access":"public","line":74,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":82,"leaves":[82]}]},{"name":"shouldPointToThirdMethod():void","kind":"method","access":"public","line":62,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":69,"leaves":[69]}]},{"name":"shouldPointStackTraceToPreviousVerified():void","kind":"method","access":"public","line":49,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":57,"leaves":[57]}]},{"name":"shouldPointToSecondMethodBecauseOfTooManyActualInvocations():void","kind":"method","access":"public","line":97,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":104,"leaves":[104]}]},{"name":"shouldPointToFourthMethodBecauseOfTooLittleActualInvocations():void","kind":"method","access":"public","line":109,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":118,"leaves":[118]}]},{"name":"shouldPointToFirstMethodBecauseOfTooManyActualInvocations():void","kind":"method","access":"public","line":87,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":92,"leaves":[92]}]}]},{"name":"StackTraceFilteringTest","kind":"class","access":"public","line":22,"children":[{"name":"shouldFilterStacktraceWhenVerifyingInOrder():void","kind":"method","access":"public","line":80,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":90,"leaves":[90]}]}]}]}]}]},"class":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockitousage","children":[{"kind":"package","name":"verification","classes":[{"name":"BasicVerificationInOrderTest","kind":"class","access":"public","line":19,"children":[{"name":"shouldFailOnFirstMethodBecauseOneInvocationWantedAgain():void","kind":"method","access":"public","line":103,"leaves":[103]}]}]}]}]}]}});