package ae.etisalat.eim.ocr.gateway.service.mapper;

import ae.etisalat.eim.ocr.gateway.domain.*;
import ae.etisalat.eim.ocr.gateway.service.dto.RequestWfDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity RequestWf and its DTO RequestWfDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface RequestWfMapper {

    RequestWfDTO requestWfToRequestWfDTO(RequestWf requestWf);

    List<RequestWfDTO> requestWfsToRequestWfDTOs(List<RequestWf> requestWfs);

    RequestWf requestWfDTOToRequestWf(RequestWfDTO requestWfDTO);

    List<RequestWf> requestWfDTOsToRequestWfs(List<RequestWfDTO> requestWfDTOs);
}
