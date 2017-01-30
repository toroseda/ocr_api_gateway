package ae.etisalat.eim.ocr.gateway.service.mapper;

import ae.etisalat.eim.ocr.gateway.domain.*;
import ae.etisalat.eim.ocr.gateway.service.dto.EdmsResponseDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity EdmsResponse and its DTO EdmsResponseDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EdmsResponseMapper {

    @Mapping(source = "edmsLocation.id", target = "edmsLocationId")
    EdmsResponseDTO edmsResponseToEdmsResponseDTO(EdmsResponse edmsResponse);

    List<EdmsResponseDTO> edmsResponsesToEdmsResponseDTOs(List<EdmsResponse> edmsResponses);

    @Mapping(source = "edmsLocationId", target = "edmsLocation")
    EdmsResponse edmsResponseDTOToEdmsResponse(EdmsResponseDTO edmsResponseDTO);

    List<EdmsResponse> edmsResponseDTOsToEdmsResponses(List<EdmsResponseDTO> edmsResponseDTOs);

    default EdmsLocation edmsLocationFromId(Long id) {
        if (id == null) {
            return null;
        }
        EdmsLocation edmsLocation = new EdmsLocation();
        edmsLocation.setId(id);
        return edmsLocation;
    }
}
