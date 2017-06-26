Grails Networking Discovery Experiment
<g:formatDate date="${new Date()}" />
<g:each in="${model}" var="modelMember">
	<br/>${modelMember}
</g:each>
<g:each in="${model.runtimeParameterMap}" var="mapMember">
	<br/>${mapMember.key}==${mapMember.value as String}
</g:each>